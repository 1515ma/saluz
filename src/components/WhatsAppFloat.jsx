import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8">
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.412.71 4.66 1.93 6.564L4 29l7.59-1.928A11.94 11.94 0 0 0 16 27c6.628 0 12-5.373 12-12s-5.372-12-12-12Zm0 21.6c-1.74 0-3.43-.467-4.917-1.35l-.353-.213-4.51 1.144 1.176-4.398-.23-.367A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.6 9.6Zm5.41-6.97c-.297-.148-1.76-.868-2.033-.966-.273-.099-.471-.149-.668.149-.198.297-.766.965-.94 1.163-.173.198-.347.223-.644.074-.297-.149-1.253-.46-2.388-1.469-.883-.785-1.479-1.756-1.653-2.054-.173-.297-.018-.458.131-.606.134-.133.297-.347.446-.52.148-.174.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.148-.668-1.609-.916-2.205-.242-.578-.487-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.273.297-1.04 1.016-1.04 2.477 0 1.461 1.066 2.873 1.214 3.07.149.198 2.098 3.2 5.083 4.487.71.306 1.265.49 1.697.627.713.227 1.362.195 1.876.118.572-.085 1.76-.72 2.008-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347Z" />
        </svg>
      </div>
    </motion.a>
  );
}
