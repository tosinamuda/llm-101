import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Close as X } from '@carbon/react/icons';
import { Button, Tile } from '@carbon/react';
import type { Slide } from '../../data/slides';

interface ReferencePanelProps {
  isOpen: boolean;
  onToggle: () => void;
  currentSlide: number;
  slides: Slide[];
}

/**
 * ReferencePanel - Side panel showing additional reference materials for the current slide
 */
const ReferencePanel: React.FC<ReferencePanelProps> = ({ 
  isOpen, 
  onToggle, 
  currentSlide, 
  slides 
}) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '300px', opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="border-l border-gray-800 h-full flex flex-col relative z-10"
        >
          <div className="p-4 border-b border-gray-800 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Reference</h2>
            <Button 
              kind="ghost" 
              size="sm" 
              onClick={onToggle} 
              hasIconOnly 
              renderIcon={X} 
              iconDescription="Close reference panel"
            />
          </div>
          <div className="overflow-y-auto p-4 h-full">
            <div className="space-y-4">
              <h3 className="font-medium mb-2 text-lg">{slides[currentSlide].title}</h3>
              <p className="text-gray-300 italic">{slides[currentSlide].subtitle}</p>
              
              <Tile className="bg-gray-800">
                <h3 className="font-medium mb-2">Key Points</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>Understanding key concepts</li>
                  <li>Implementation strategies</li>
                  <li>Common pitfalls</li>
                  <li>Example code snippets</li>
                </ul>
              </Tile>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReferencePanel; 