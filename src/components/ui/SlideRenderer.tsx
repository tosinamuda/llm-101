import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Slide } from '../../data/slides';

interface SlideRendererProps {
  slide: Slide;
  slideKey: number; // Used for animation key
}

/**
 * SlideRenderer - Responsible for rendering the current slide with animations
 * This component handles only the presentation of a single slide
 */
const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, slideKey }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={slideKey}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 h-full w-full overflow-y-auto"
        >
          {slide.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideRenderer; 