'use client'

import React, { useState, useEffect } from 'react';

// Import components
import TocPanel from './TocPanel';
import MainContentArea from './MainContentArea';

// Import data
import slidesData from '../../data/slides';

/**
 * AppShell - The main container component for the LLM workshop application
 * This component manages the state and coordinates between the different UI components
 */
const AppShell: React.FC = () => {
  // State for panel visibility
  const [isTocOpen, setIsTocOpen] = useState(false);  // Default closed
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Check for mobile view on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();
    
    // Set up listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Toggle functions
  const toggleToc = () => setIsTocOpen(!isTocOpen);
  
  // Slide navigation handlers
  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  const handleNextSlide = () => {
    if (currentSlide < slidesData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSelectSlide = (index: number) => {
    setCurrentSlide(index);
    if (isMobile) {
      setIsTocOpen(false);
    }
  };

  return (
    <div className="h-screen bg-white text-gray-950 flex flex-col">
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden h-screen pb-14">
        {/* Table of Contents Panel */}
        <TocPanel 
          isOpen={isTocOpen} 
          onToggle={toggleToc} 
          slides={slidesData}
          currentSlide={currentSlide}
          onSelectSlide={handleSelectSlide}
        />

        {/* Main Content Area */}
        <MainContentArea 
          isTocOpen={isTocOpen} 
          toggleToc={toggleToc}
          currentSlide={currentSlide}
          slides={slidesData}
          onPreviousSlide={handlePreviousSlide}
          onNextSlide={handleNextSlide}
        />
      </div>
      
      {/* Optional overlay for mobile when panels are open */}
      {isMobile && isTocOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => {
            setIsTocOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default AppShell;