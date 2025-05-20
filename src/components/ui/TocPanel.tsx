import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Close as X } from '@carbon/react/icons';
import { 
  Button, 
  SideNavItems, 
  SideNavLink
} from '@carbon/react';
import type { Slide } from '../../data/slides';

interface TocPanelProps {
  isOpen: boolean;
  onToggle: () => void;
  slides: Slide[];
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

/**
 * TocPanel - Table of Contents sidebar for workshop slides
 * Shows a list of all slides and allows navigation to any slide
 */
const TocPanel: React.FC<TocPanelProps> = ({ 
  isOpen, 
  onToggle, 
  slides, 
  currentSlide, 
  onSelectSlide 
}) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -250, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 h-[calc(100vh-48px)] w-[250px] bg-white border-r border-gray-200 flex flex-col z-40"
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Contents</h2>
            <Button 
              kind="ghost" 
              size="sm" 
              onClick={onToggle} 
              hasIconOnly 
              renderIcon={X} 
              iconDescription="Close table of contents"
            />
          </div>
          <div className="overflow-y-auto flex-1 bg-gray-50">
            <SideNavItems>
              {slides.map((slide, index) => (
                <SideNavLink 
                  href="#" 
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectSlide(index);
                    onToggle(); // Auto-close after selection
                  }}
                  isActive={currentSlide === index}
                  className="border-b border-gray-100"
                >
                  <div className="flex items-center">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{slide.title}</span>
                  </div>
                </SideNavLink>
              ))}
            </SideNavItems>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TocPanel; 