import { motion, AnimatePresence } from 'motion/react';

interface props {
  children: string;
  value: number;
  className?: string;
}

export function TaskStatus({ children, value, className }: props) {
  return (
    <>
      <p>{children}:</p>
      <span className={`inline-block w-3 h-4 ${className}`}>
        <AnimatePresence>
          <motion.div
            key={value}
            className="inline-block"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
          >
            {value}
          </motion.div>
        </AnimatePresence>
      </span>
    </>
  );
}
