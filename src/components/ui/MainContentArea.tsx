import React from 'react';
import { Grid, Column } from '@carbon/react';
import SlideRenderer from './SlideRenderer';
import SlideFooter from './SlideFooter';
import type { Slide } from '../../data/slides';

interface MainContentAreaProps {
  isTocOpen: boolean;
  toggleToc: () => void;
  currentSlide: number;
  slides: Slide[];
  onPreviousSlide: () => void;
  onNextSlide: () => void;
}

/**
 * MainContentArea - Central component that displays slides and navigation controls
 */
const MainContentArea: React.FC<MainContentAreaProps> = ({ 
  toggleToc, 
  currentSlide,
  slides,
  onPreviousSlide, 
  onNextSlide 
}) => {
  return (
    <main id="main-content" className="flex-1 flex flex-col w-full overflow-hidden">
      <div className="h-full w-full">
        <div className="h-full w-full flex flex-col">
          {/* Slide Area */}
          <div className="flex-1 overflow-y-auto relative p-0">
            {/* Slide Content */}
            <SlideRenderer 
              slide={slides[currentSlide]} 
              slideKey={currentSlide}
            />
          </div>
          
          {/* Navigation Controls */}
          <SlideFooter
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onPrevious={onPreviousSlide}
            onNext={onNextSlide}
            onToggleToc={toggleToc}
          />
        </div>
      </div>
    </main>
  );
};

export default MainContentArea; 