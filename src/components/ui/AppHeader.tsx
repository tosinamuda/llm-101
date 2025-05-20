import React from 'react';
import { 
  Header, 
  HeaderName, 
  HeaderNavigation, 
  HeaderMenuItem 
} from '@carbon/react';

/**
 * AppHeader - Top navigation bar for the workshop application
 */
const AppHeader: React.FC = () => {
  return (
    <Header aria-label="LLM101 Workshop" className="z-20 bg-blue-600">
      <HeaderName className='text-white' prefix="">Welcome to LLM101</HeaderName>
      <HeaderNavigation aria-label="Main Navigation">
        <HeaderMenuItem href="#">
          Demos
        </HeaderMenuItem>
        <HeaderMenuItem href="#">
          Open Prompt Lab
        </HeaderMenuItem>
      </HeaderNavigation>
    </Header>
  );
};

export default AppHeader; 