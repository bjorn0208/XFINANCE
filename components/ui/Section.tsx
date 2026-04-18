import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { XFinanceLogo } from './XFinanceLogo';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  showWatermark?: boolean;
}

export function Section({ children, className = '', id, showWatermark = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative h-full w-full flex flex-col p-4 md:p-8 lg:p-12 overflow-hidden ${className}`}
    >
      {/* Watermark */}
      {showWatermark && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
          <XFinanceLogo className="w-[150%] max-w-none text-foreground transform -rotate-12 scale-150" />
        </div>
      )}

      {/* Content wrapper with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 w-full max-w-6xl m-auto flex flex-col"
      >
        {children}
      </motion.div>
    </section>
  );
}
