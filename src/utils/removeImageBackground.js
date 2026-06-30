/**
 * Remove o fundo de uma imagem (PNG/JPG) detectando a cor dominante dos cantos
 * e tornando pixels similares transparentes. Funciona muito bem para logos com
 * fundo branco ou cor sólida.
 *
 * Algoritmo:
 *  1. Carrega a imagem em um canvas
 *  2. Amostra os pixels dos 4 cantos para detectar a cor de fundo
 *  3. Aplica flood-fill simplificado: percorre todos os pixels e, se a cor for
 *     parecida (distância euclidiana RGB abaixo do threshold), torna transparente
 *  4. Suaviza as bordas para evitar serrilhado
 *
 * @param {string} src - URL/dataURL da imagem original
 * @param {Object} opts
 * @param {number} opts.tolerance - Tolerância de cor (0–200). Default 32.
 * @param {boolean} opts.feather - Se deve suavizar bordas (melhor resultado). Default true.
 * @returns {Promise<string>} DataURL da imagem com fundo removido (PNG)
 */
export async function removeImageBackground(src, opts = {}) {
  const { tolerance = 32, feather = true } = opts;

  const img = await loadImage(src);

  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth || img.width;
  canvas.height = img.naturalHeight || img.height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(img, 0, 0);

  const { width, height } = canvas;
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  // Amostra os 4 cantos para detectar a cor de fundo dominante.
  // Pegamos a média de cada canto e a média geral.
  const sampleSize = Math.max(2, Math.floor(Math.min(width, height) * 0.02));
  const corners = [
    { x: 0, y: 0 },
    { x: width - sampleSize, y: 0 },
    { x: 0, y: height - sampleSize },
    { x: width - sampleSize, y: height - sampleSize },
  ];

  const bg = averageCornerColors(data, width, corners, sampleSize);

  // Se a cor dos cantos for muito escura ou já é transparente, não removemos nada.
  if (bg.a < 200) {
    return canvas.toDataURL('image/png');
  }

  const tol2 = tolerance * tolerance * 3; // soma quadrática RGB

  // Passo 1: remove fundo onde a cor é similar à de fundo
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const dr = r - bg.r;
    const dg = g - bg.g;
    const db = b - bg.b;
    const dist2 = dr * dr + dg * dg + db * db;

    if (dist2 < tol2) {
      // distância 0 = 100% transparente, distância tol = 100% opaco
      const ratio = Math.sqrt(dist2 / tol2);
      data[i + 3] = Math.round(data[i + 3] * ratio);
    }
  }

  // Passo 2: suavização leve nas bordas (feather): pixels com alpha intermediário
  // são misturados com vizinhos para deixar a borda menos serrilhada
  if (feather) {
    const original = new Uint8ClampedArray(data);
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = (y * width + x) * 4 + 3;
        const a = original[idx];
        // só processar pixels nas bordas (alpha intermediário)
        if (a < 240 && a > 0) {
          // média do alpha com vizinhança 3x3
          let sum = 0;
          let count = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const nIdx = ((y + dy) * width + (x + dx)) * 4 + 3;
              sum += original[nIdx];
              count++;
            }
          }
          data[idx] = Math.round(sum / count);
        }
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL('image/png');
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function averageCornerColors(data, width, corners, sampleSize) {
  let r = 0, g = 0, b = 0, a = 0, count = 0;
  for (const c of corners) {
    for (let dy = 0; dy < sampleSize; dy++) {
      for (let dx = 0; dx < sampleSize; dx++) {
        const idx = ((c.y + dy) * width + (c.x + dx)) * 4;
        r += data[idx];
        g += data[idx + 1];
        b += data[idx + 2];
        a += data[idx + 3];
        count++;
      }
    }
  }
  return {
    r: Math.round(r / count),
    g: Math.round(g / count),
    b: Math.round(b / count),
    a: Math.round(a / count),
  };
}
