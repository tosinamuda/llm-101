import React from 'react';
import { motion } from 'framer-motion';
import PromptLab from './PromptLab';

export type Slide = {
  title: string;
  subtitle: string;
  content: React.ReactNode;
};

  // Slide 1: Introduction
const IntroductionSlide: React.FC = () => (
  <div className="flex flex-col h-full p-6 bg-[#f4f4f4]">
    <div className="flex flex-col gap-4">
      <div className="border-l-4 border-[#0f62fe] pl-4">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-light text-[#161616] mb-2"
        >
          Intro to Gen AI with <span className="font-medium">IBM Granite</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-2xl font-light text-[#525252]"
        >
          An Introduction to Large Language Models for Faculty Members
        </motion.h2>
      </div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-auto flex flex-col md:flex-row justify-between items-end"
    >
      <div className="bg-[#0f62fe] text-white px-4 py-2 inline-block">
        <p className="text-sm font-medium">Tosin Amuda</p>
      </div>
      
      <div className="flex items-center gap-2 text-xs text-[#525252] mt-4 md:mt-0">
        <div className="w-3 h-3 bg-[#0f62fe]"></div>
        <span>May 2025</span>
      </div>
        </motion.div>
  </div>
);

// Slide 2: Audience Poll
const AudiencePollSlide: React.FC = () => {
  // purely local highlight; poll is indicative, not interactive
  const [voted, setVoted] = React.useState<string | null>(null);
  
  return (
    <div className="grid md:grid-cols-2 gap-8 p-6 items-center select-none h-full bg-[#f4f4f4]">
      {/* Left column – prompt & three choices */}
      <div>
        <div className="border-l-4 border-[#0f62fe] pl-4 mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-light text-[#161616] mb-2 leading-tight"
          >
            Have you used a Gen‑AI app?
            <span className="block text-[#525252] text-xl">(ChatGPT, Gemini, Claude, Granite)</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-3 mb-2"
        >
          <button 
            onClick={() => setVoted('yes')} 
            data-selected={voted === 'yes'}
            className={`px-6 py-4 text-sm ${voted === 'yes' ? 'bg-[#0f62fe] text-white' : 'bg-white text-[#161616] border-l-4 border-[#0f62fe] hover:bg-[#e8e8e8]'} transition-colors flex items-center`}
          >
            <span className="font-medium text-base">Yes</span>
            {voted === 'yes' && <span className="ml-auto">✓</span>}
          </button>
          <button 
            onClick={() => setVoted('no')} 
            data-selected={voted === 'no'}
            className={`px-6 py-4 text-sm ${voted === 'no' ? 'bg-[#0f62fe] text-white' : 'bg-white text-[#161616] border-l-4 border-[#393939] hover:bg-[#e8e8e8]'} transition-colors flex items-center`}
          >
            <span className="font-medium text-base">No</span>
            {voted === 'no' && <span className="ml-auto">✓</span>}
          </button>
          <button 
            onClick={() => setVoted('unsure')} 
            data-selected={voted === 'unsure'}
            className={`px-6 py-4 text-sm ${voted === 'unsure' ? 'bg-[#0f62fe] text-white' : 'bg-white text-[#161616] border-l-4 border-[#393939] hover:bg-[#e8e8e8]'} transition-colors flex items-center`}
          >
            <span className="font-medium text-base">Not Sure</span>
            {voted === 'unsure' && <span className="ml-auto">✓</span>}
          </button>
        </motion.div>
      </div>

      {/* Right column – 1‑in‑10 stat with visual representation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white p-6 border-l-4 border-[#0f62fe] shadow-sm"
      >
        <h3 className="text-[20px] font-normal text-[#161616] mb-5">Global Usage Statistics</h3>
        
        <div className="mb-6">
          <div className="grid grid-cols-10 gap-2 mb-4">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className={`h-8 ${i === 0 ? 'bg-[#0f62fe]' : 'bg-[#e0e0e0]'}`}
                aria-label={i === 0 ? "Active user" : "Inactive user"}
              />
            ))}
          </div>
          <div className="text-2xl font-light text-[#161616]">
            <span className="font-medium">1 in 10</span> people 
          </div>
          <div className="text-sm text-[#525252]">use ChatGPT monthly worldwide</div>
        </div>
        
        <div className="text-xs text-[#6f6f6f] border-t border-[#e0e0e0] pt-3 mt-4">
          Source: OpenAI / Analytics Data, Q1 2025
        </div>
      </motion.div>
      
      <div className="flex items-center text-xs text-[#6f6f6f] md:col-span-2">
        <div className="w-3 h-3 bg-[#0f62fe] mr-2"></div>
        <span>Based on global usage patterns</span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------
   🖼️  Slide 3 – Open question: "What do you use Gen‑AI for?"
   ------------------------------------------------------------------*/
const UseForSlide: React.FC = () => (
  <div className="flex flex-col justify-center h-full p-6 bg-[#f4f4f4]">
    <div className="border-l-4 border-[#0f62fe] pl-4 mb-6">
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-light text-[#161616] mb-2"
      >
        What do <span className="font-medium">you</span> use Gen‑AI apps for?
      </motion.h2>
    </div>
    
          <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-white p-6 border-l-4 border-[#0f62fe] shadow-sm max-w-2xl"
    >
      <p className="text-[#161616] mb-4">
        Think of the last task you handed off to ChatGPT, Gemini, Claude, or Granite.
      </p>
      <p className="text-sm text-[#525252]">
        Keep that in mind—we&apos;ll compare with global data next.
      </p>
          </motion.div>
          
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-auto flex justify-between items-center"
    >
      <div className="flex items-center text-xs text-[#6f6f6f]">
        <div className="w-3 h-3 bg-[#0f62fe] mr-2"></div>
        <span>Interactive discussion</span>
      </div>
      
      <div className="bg-[#0f62fe] text-white px-3 py-1 text-xs">
        Audience participation
      </div>
    </motion.div>
  </div>
);

/* ------------------------------------------------------------------
   🖼️  Slide 4 – How People Actually Use Gen AI
   ------------------------------------------------------------------*/
const ActualUsageSlide: React.FC = () => {

  return (
    <div className="flex flex-col h-full p-6 bg-[#f4f4f4]">
      <h2 className="text-[32px] font-light text-[#161616] mb-8 leading-tight">
        How People <span className="font-semibold">Actually</span> Use AI
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
        
        {/* Panel A  Top 10 use-cases for 2025 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <div className="w-full bg-white p-6 border-l-4 border-[#0f62fe] shadow-sm h-full">
            <h3 className="text-[20px] font-normal text-[#161616] mb-5">Top 10 Gen AI Use Cases in 2025</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-4">1</div>
                <div>
                  <div className="font-medium text-[#161616]">Therapy/companionship</div>
                  <div className="text-xs text-[#525252]">Emotional support & conversation</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-4 opacity-90">2</div>
                <div>
                  <div className="font-medium text-[#161616]">Organizing my life</div>
                  <div className="text-xs text-[#525252]">Personal productivity & planning</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-4 opacity-80">3</div>
                <div>
                  <div className="font-medium text-[#161616]">Finding purpose</div>
                  <div className="text-xs text-[#525252]">Personal development & reflection</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-4 opacity-70">4</div>
                <div>
                  <div className="font-medium text-[#161616]">Enhanced learning</div>
                  <div className="text-xs text-[#525252]">Personalized education & skill-building</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-4 opacity-60">5</div>
                <div>
                  <div className="font-medium text-[#161616]">Generating code</div>
                  <div className="text-xs text-[#525252]">Programming & development assistance</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-4 opacity-50">6</div>
                <div>
                  <div className="font-medium text-[#161616]">Generating ideas</div>
                  <div className="text-xs text-[#525252]">Creative brainstorming & concept development</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-4 opacity-40">7</div>
                <div>
                  <div className="font-medium text-[#161616]">Fun and nonsense</div>
                  <div className="text-xs text-[#525252]">Entertainment & creative play</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-4 opacity-30">8</div>
                <div>
                  <div className="font-medium text-[#161616]">Improving code</div>
                  <div className="text-xs text-[#525252]">Debugging & optimizing existing software</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-4 opacity-25">9</div>
                <div>
                  <div className="font-medium text-[#161616]">Creativity</div>
                  <div className="text-xs text-[#525252]">Artistic expression & design assistance</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-4 opacity-20">10</div>
                <div>
                  <div className="font-medium text-[#161616]">Healthier living</div>
                  <div className="text-xs text-[#525252]">Wellness advice & lifestyle improvement</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-2 text-xs text-[#6f6f6f] pl-2 border-l-2 border-[#0f62fe]">
            Source: Filtered / HBR, 2025
          </div>
        </motion.div>

        {/* Panel B: Education & Library */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <div className="w-full h-full">
            <div className="bg-[#0f62fe] text-white p-5 flex justify-between items-center">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="font-normal text-lg">Education & Library</span>
              </div>
              <div className="text-xl font-medium">9.3%</div>
            </div>
            
            <div className="bg-white p-5 shadow-sm flex-grow">
              <div className="mb-5">
                <div className="text-sm font-medium text-[#161616] mb-3 uppercase tracking-wide">Top Titles</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 hover:bg-[#f4f4f4] transition-colors">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#6f6f6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-1M16 3v1M6 3v1m10 7H8m9 3H8m9 3H8" />
                      </svg>
                      <span className="text-[#161616]">Tutors</span>
                    </div>
                    <div>
                      <span className="text-[#0f62fe] font-medium">1.6%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 hover:bg-[#f4f4f4] transition-colors">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#6f6f6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <span className="text-[#161616]">Archivists</span>
                    </div>
                    <div>
                      <span className="text-[#0f62fe] font-medium">1.5%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 hover:bg-[#f4f4f4] transition-colors">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#6f6f6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <span className="text-[#161616]">Instructional Designers</span>
                    </div>
                    <div>
                      <span className="text-[#0f62fe] font-medium">0.8%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-[#161616] mb-3 uppercase tracking-wide">Top Tasks</div>
                <div className="space-y-2">
                  <div className="p-3 border-l-2 border-[#0f62fe] bg-[#edf5ff]">
                    <div className="flex justify-between">
                      <div className="flex-1">
                        <span className="text-sm leading-tight text-[#161616] inline-block">Design and develop comprehensive educational curricula and materials</span>
                      </div>
                      <div className="pl-2">
                        <span className="text-[#0f62fe] font-medium">1.9%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border-l-2 border-[#0f62fe] hover:bg-[#edf5ff] transition-colors">
                    <div className="flex justify-between">
                      <div className="flex-1">
                        <span className="text-sm leading-tight text-[#161616] inline-block">Teach and instruct diverse subjects across educational settings</span>
                      </div>
                      <div className="pl-2">
                        <span className="text-[#0f62fe] font-medium">1.7%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border-l-2 border-[#0f62fe] hover:bg-[#edf5ff] transition-colors">
                    <div className="flex justify-between">
                      <div className="flex-1">
                        <span className="text-sm leading-tight text-[#161616] inline-block">Manage book and document publishing processes</span>
                      </div>
                      <div className="pl-2">
                        <span className="text-[#0f62fe] font-medium">1.4%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-2 text-xs text-[#6f6f6f] pl-2 border-l-2 border-[#0f62fe]">
            Source: Claude 2025 AI Economic Impact Report
          </div>
          </motion.div>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-[#525252]">
          <span className="text-[#0f62fe] font-medium">Key insight:</span> Shift from technical to emotional applications in 2025
        </p>
        <div className="flex items-center text-xs text-[#6f6f6f]">
          <div className="w-3 h-3 bg-[#0f62fe] mr-2"></div>
          <span>Data based on global usage patterns</span>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------
   🖼️  Slide 5 – Building with IBM AI Tools (Granite & watsonx.ai)
   ------------------------------------------------------------------*/
const IBMToolsSlide: React.FC = () => (
  <div className="flex flex-col h-full p-6 bg-[#f4f4f4]">
    <div className="border-l-4 border-[#0f62fe] pl-4 mb-6">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-light text-[#161616] mb-2"
      >
        Building with <span className="font-medium">IBM AI</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-[#525252]"
      >
        Granite models and watsonx.ai platform
      </motion.p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
      {/* IBM Granite Models */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 border-l-4 border-[#0f62fe] shadow-sm h-full flex flex-col"
      >
        <div className="flex items-center gap-3 mb-4">
          <svg width="32" height="32" viewBox="0 0 32 32" className="fill-[#0f62fe]">
            <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/>
            <path d="M11.5,11A2.5,2.5,0,1,0,9,13.5,2.48,2.48,0,0,0,11.5,11Z"/>
            <path d="M20.5,11A2.5,2.5,0,1,0,18,13.5,2.48,2.48,0,0,0,20.5,11Z"/>
            <path d="M16,24a8,8,0,0,0,6.85-3.89l-1.71-1a6,6,0,0,1-10.28,0l-1.71,1A8,8,0,0,0,16,24Z"/>
          </svg>
          <h3 className="text-[20px] font-normal text-[#161616]">IBM Granite Models</h3>
        </div>
        
        <ul className="space-y-4 mb-4 flex-grow">
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-3 flex-shrink-0 mt-0.5">1</div>
            <div>
              <div className="font-medium text-[#161616]">Enterprise-ready foundation models</div>
              <div className="text-xs text-[#525252]">Designed for business use cases with enhanced security</div>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-3 flex-shrink-0 mt-0.5 opacity-90">2</div>
            <div>
              <div className="font-medium text-[#161616]">Multiple model sizes</div>
              <div className="text-xs text-[#525252]">From 3B to 34B parameters, optimized for different needs</div>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-3 flex-shrink-0 mt-0.5 opacity-80">3</div>
            <div>
              <div className="font-medium text-[#161616]">Code and text capabilities</div>
              <div className="text-xs text-[#525252]">Specialized models for different content types</div>
            </div>
          </li>
        </ul>
        
        <div className="text-xs text-[#6f6f6f] border-t border-[#e0e0e0] pt-3">
          Granite models available through watsonx.ai or direct API integration
        </div>
      </motion.div>
      
      {/* IBM watsonx.ai Platform */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 border-l-4 border-[#0f62fe] shadow-sm h-full flex flex-col"
      >
        <div className="flex items-center gap-3 mb-4">
          <svg width="32" height="32" viewBox="0 0 32 32" className="fill-[#0f62fe]">
            <path d="M29,10H24V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3v7H3a1,1,0,0,0-1,1V29a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V11A1,1,0,0,0,29,10ZM10,4H22v6H10ZM4,28V12H28V28Z"/>
            <path d="M14,16h4v4h-4Z"/>
            <path d="M20,16h4v4H20Z"/>
            <path d="M14,22h4v4H14Z"/>
            <path d="M20,22h4v4H20Z"/>
            <path d="M8,16h4v4H8Z"/>
            <path d="M8,22h4v4H8Z"/>
          </svg>
          <h3 className="text-[20px] font-normal text-[#161616]">watsonx.ai Platform</h3>
        </div>
        
        <ul className="space-y-4 mb-4 flex-grow">
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-3 flex-shrink-0 mt-0.5">1</div>
            <div>
              <div className="font-medium text-[#161616]">Complete AI studio</div>
              <div className="text-xs text-[#525252]">Build, train, tune and deploy AI models</div>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-3 flex-shrink-0 mt-0.5 opacity-90">2</div>
            <div>
              <div className="font-medium text-[#161616]">Prompt engineering workspace</div>
              <div className="text-xs text-[#525252]">Interactive lab for designing and testing prompts</div>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-sm bg-[#0f62fe] flex items-center justify-center text-white font-medium mr-3 flex-shrink-0 mt-0.5 opacity-80">3</div>
            <div>
              <div className="font-medium text-[#161616]">Enterprise governance</div>
              <div className="text-xs text-[#525252]">Security, compliance, and responsible AI controls</div>
            </div>
          </li>
        </ul>
        
        <div className="text-xs text-[#6f6f6f] border-t border-[#e0e0e0] pt-3">
          Available as managed service or on private cloud
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-4 flex justify-between items-center"
    >
      <div className="flex items-center text-xs text-[#6f6f6f]">
        <div className="w-3 h-3 bg-[#0f62fe] mr-2"></div>
        <span>IBM watsonx platform, May 2025</span>
      </div>
      
      <div className="bg-[#0f62fe] text-white px-3 py-1 text-xs">
        Enterprise-grade AI
      </div>
    </motion.div>
  </div>
);






// Define the slides array using the components
const slidesData: Slide[] = [
  // Slide 1: Introduction
  {
    title: "Beyond ChatGPT",
    subtitle: "Large Language Models in Computer Science Education",
    content: <IntroductionSlide />
  },
  
  // Slide 2: Audience Poll
  {
    title: "Quick Poll",
    subtitle: "Your Experience with AI Tools",
    content: <AudiencePollSlide />
  },
  
  // Slide 3: What do you use Gen-AI for?
  {
    title: "Open Question",
    subtitle: "What do you use Gen-AI for?",
    content: <UseForSlide />
  },

  // Slide 4: Evidence
  {
    title: "Real-World Usage",
    subtitle: "How People Actually Use Gen AI",
    content: <ActualUsageSlide />
  },
  
  // Slide 5: Building with IBM AI Tools
  {
    title: "IBM AI Tools",
    subtitle: "Granite and watsonx.ai",
    content: <IBMToolsSlide />
  },
  
  // Slide 6: watsonx.ai Prompt Lab Interface
  {
    title: "Prompt Engineering",
    subtitle: "watsonx.ai Prompt Lab",
    content: <PromptLab />
  },
  
 
];

export default slidesData; 