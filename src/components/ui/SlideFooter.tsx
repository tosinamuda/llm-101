import React from 'react';
import { Button } from '@carbon/react';
import { ChevronLeft, ChevronRight, Menu } from '@carbon/react/icons';

interface SlideControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onToggleToc: () => void;
}

/**
 * Footer navigation for the presentation 
 * Provides arrow controls for navigation and hamburger menu for TOC
 */
const SlideFooter: React.FC<SlideControlsProps> = ({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext,
  onToggleToc
}) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center py-3 px-5 border-t border-gray-100 bg-[#f4f4f4] z-20 no-print">
      <div className="flex items-center">
        <Button
          kind="ghost"
          size="md"
          renderIcon={Menu}
          onClick={onToggleToc}
          hasIconOnly
          iconDescription="Toggle table of contents"
          className="mr-4"
        />
        <h4 className="text-sm font-medium text-[#161616]">Granite Workshop</h4>
      </div>
      
      <span className="text-[#525252] text-sm">Slide {currentSlide + 1} of {totalSlides}</span>
      
      <div className="flex items-center space-x-2">
        <Button
          kind="tertiary"
          size="md"
          renderIcon={ChevronLeft}
          onClick={onPrevious}
          hasIconOnly
          iconDescription="Previous slide"
          disabled={currentSlide === 0}
        />
        <Button
          kind="tertiary"
          size="md"
          renderIcon={ChevronRight}
          onClick={onNext}
          hasIconOnly
          iconDescription="Next slide"
          disabled={currentSlide === totalSlides - 1}
        />
      </div>
    </footer>
  );
};

export default SlideFooter; 