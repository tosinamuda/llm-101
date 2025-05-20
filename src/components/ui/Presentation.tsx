import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slides = [
    // Slide 1: Introduction
    {
      title: "Beyond ChatGPT",
      subtitle: "Large Language Models in Computer Science Education",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-center"
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Beyond ChatGPT</h2>
            <h3 className="text-2xl font-semibold text-gray-700">Large Language Models in Computer Science Education</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-600 italic">Transforming Education Through Responsible AI Integration</p>
          </motion.div>
        </div>
      )
    },
    
    // Slide 2: Understanding the Landscape
    {
      title: "Understanding the AI Landscape",
      subtitle: "Where ChatGPT Fits in the Bigger Picture",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Understanding the AI Landscape</h2>
          <p className="text-lg text-gray-700 mb-6">Where ChatGPT Fits in the Bigger Picture</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">ChatGPT is Just One Tool</h3>
              <p className="text-gray-600">ChatGPT represents one implementation of LLM technology, with specific design choices and limitations.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-purple-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">The LLM Ecosystem</h3>
              <p className="text-gray-600">Claude, Llama, PaLM, Gemini, and specialized academic models each have unique capabilities and applications.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-green-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">Evolving Rapidly</h3>
              <p className="text-gray-600">Current concerns about LLMs are being actively addressed through research, development, and education.</p>
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Slide 3: Common Faculty Concerns
    {
      title: "Addressing Common Concerns",
      subtitle: "Faculty Perspectives on AI in Education",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Addressing Common Concerns</h2>
          <p className="text-lg text-gray-700 mb-6">Faculty Perspectives on AI in Education</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-red-50 p-4 rounded-lg shadow flex"
              >
                <div className="text-red-500 mr-3 text-xl">❌</div>
                <div>
                  <h3 className="font-semibold text-red-700">Concern: Student Cheating</h3>
                  <p className="text-gray-600 text-sm">LLMs might be used to generate assignments without learning</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-red-50 p-4 rounded-lg shadow flex"
              >
                <div className="text-red-500 mr-3 text-xl">❌</div>
                <div>
                  <h3 className="font-semibold text-red-700">Concern: Misinformation</h3>
                  <p className="text-gray-600 text-sm">LLMs can hallucinate and present incorrect information</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-red-50 p-4 rounded-lg shadow flex"
              >
                <div className="text-red-500 mr-3 text-xl">❌</div>
                <div>
                  <h3 className="font-semibold text-red-700">Concern: Reduced Critical Thinking</h3>
                  <p className="text-gray-600 text-sm">Students might rely on AI rather than developing their own skills</p>
                </div>
              </motion.div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-green-50 p-4 rounded-lg shadow flex"
              >
                <div className="text-green-500 mr-3 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-green-700">Solution: AI-Native Assessments</h3>
                  <p className="text-gray-600 text-sm">Design assignments that leverage AI as a tool rather than fighting against it</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-green-50 p-4 rounded-lg shadow flex"
              >
                <div className="text-green-500 mr-3 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-green-700">Solution: Teaching Critical Evaluation</h3>
                  <p className="text-gray-600 text-sm">Show students how to verify and critique AI-generated content</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-green-50 p-4 rounded-lg shadow flex"
              >
                <div className="text-green-500 mr-3 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-green-700">Solution: AI Literacy</h3>
                  <p className="text-gray-600 text-sm">Teach how AI works, its limitations, and responsible usage</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 4: Different Modalities and Capabilities
    {
      title: "Beyond Text Completion",
      subtitle: "The Diverse Capabilities of Modern LLMs",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Beyond Text Completion</h2>
          <p className="text-lg text-gray-700 mb-6">The Diverse Capabilities of Modern LLMs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Prompting Techniques</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Zero-shot & few-shot learning</li>
                <li>Chain-of-thought reasoning</li>
                <li>Role-based prompting</li>
                <li>Structured outputs (JSON, XML)</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-purple-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Multimodal Capabilities</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Image understanding & generation</li>
                <li>Code understanding & generation</li>
                <li>Data analysis & visualization</li>
                <li>Audio transcription & generation</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-green-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">Advanced Applications</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Autonomous agents</li>
                <li>Reasoning & problem-solving</li>
                <li>Tool use & augmentation</li>
                <li>Collaborative learning</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 bg-yellow-50 p-4 rounded-lg shadow"
          >
            <p className="text-gray-700">
              <span className="font-semibold">Key insight:</span> Modern LLMs are not just text generators - they're interactive reasoning systems that can be directed, guided, and integrated with other tools to solve complex problems.
            </p>
          </motion.div>
        </div>
      )
    },
    
    // Slide 5: Educational Applications
    {
      title: "Transforming CS Education",
      subtitle: "Practical Applications in the Classroom",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Transforming CS Education</h2>
          <p className="text-lg text-gray-700 mb-6">Practical Applications in the Classroom</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 p-4 rounded-lg shadow space-y-3"
            >
              <h3 className="text-xl font-semibold text-blue-700">For Instructors</h3>
              <div className="flex items-start">
                <div className="text-blue-500 mr-2">📚</div>
                <p className="text-gray-600 text-sm">Generate diverse examples and practice problems</p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-2">🔍</div>
                <p className="text-gray-600 text-sm">Review and debug student code with detailed feedback</p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-2">📝</div>
                <p className="text-gray-600 text-sm">Create customized learning materials for different student levels</p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-2">💡</div>
                <p className="text-gray-600 text-sm">Develop innovative, AI-native assignments</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-green-50 p-4 rounded-lg shadow space-y-3"
            >
              <h3 className="text-xl font-semibold text-green-700">For Students</h3>
              <div className="flex items-start">
                <div className="text-green-500 mr-2">🔄</div>
                <p className="text-gray-600 text-sm">Get immediate feedback on code and concepts</p>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 mr-2">🧩</div>
                <p className="text-gray-600 text-sm">Break down complex problems with guided assistance</p>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 mr-2">🌱</div>
                <p className="text-gray-600 text-sm">Explore alternative approaches and techniques</p>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 mr-2">📊</div>
                <p className="text-gray-600 text-sm">Learn to prompt, evaluate, and work with AI effectively</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 bg-yellow-50 p-4 rounded-lg shadow"
          >
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">Real-world Readiness</h3>
            <p className="text-gray-600">
              AI literacy and prompt engineering are becoming essential skills in industry. Teaching students to work effectively with AI prepares them for the modern workplace where these tools are increasingly prevalent.
            </p>
          </motion.div>
        </div>
      )
    },
    
    // Slide 6: Microsoft Training
    {
      title: "Professional Development",
      subtitle: "Microsoft's Generative AI Training for Educators",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Professional Development</h2>
          <p className="text-lg text-gray-700 mb-6">Microsoft's Generative AI Training for Educators</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Microsoft Generative AI Course</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-blue-500 mr-2 text-xl">•</div>
                  <p className="text-gray-600">Comprehensive curriculum designed specifically for educators</p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-500 mr-2 text-xl">•</div>
                  <p className="text-gray-600">Learn fundamentals of LLMs and generative AI</p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-500 mr-2 text-xl">•</div>
                  <p className="text-gray-600">Practical applications for classroom integration</p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-500 mr-2 text-xl">•</div>
                  <p className="text-gray-600">Earn certification to demonstrate proficiency</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-green-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-3">Benefits for Faculty</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 text-xl">✓</div>
                  <p className="text-gray-600">Stay ahead of rapidly evolving technology</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 text-xl">✓</div>
                  <p className="text-gray-600">Develop AI-native teaching strategies</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 text-xl">✓</div>
                  <p className="text-gray-600">Access to resources, tools, and community</p>
                </div>
                <div className="flex items-start">
                  <div className="text-green-500 mr-2 text-xl">✓</div>
                  <p className="text-gray-600">Ability to effectively teach AI literacy to students</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 bg-blue-100 p-4 rounded-lg shadow text-center"
          >
            <p className="text-blue-800 font-semibold text-lg">
              Join our departmental cohort taking the Microsoft Generative AI Training together!
            </p>
            <p className="text-blue-600 mt-2">
              Registration opens next week - more details coming soon
            </p>
          </motion.div>
        </div>
      )
    },
    
    // Slide 7: Getting Started
    {
      title: "Getting Started",
      subtitle: "First Steps with LLMs in CS Education",
      content: (
        <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Getting Started</h2>
          <p className="text-lg text-gray-700 mb-6">First Steps with LLMs in CS Education</p>
          
          <div className="grid grid-cols-1 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">1. Experiment Personally</h3>
              <p className="text-gray-600">
                Before bringing LLMs to the classroom, spend time exploring different systems. Compare ChatGPT, Claude, Gemini, etc. to understand their strengths and limitations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-blue-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">2. Start with Small, Low-Stakes Activities</h3>
              <p className="text-gray-600">
                Begin with optional exercises or supplementary materials that incorporate LLMs rather than core assessments.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">3. Be Transparent with Students</h3>
              <p className="text-gray-600">
                Clearly communicate your AI policy, expectations for AI use, and how you're incorporating these tools in your teaching.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-blue-50 p-4 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">4. Join Our Faculty Learning Community</h3>
              <p className="text-gray-600">
                Connect with colleagues who are exploring AI in education to share experiences, challenges, and successful approaches.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 bg-green-100 p-4 rounded-lg shadow text-center"
          >
            <p className="text-green-800 font-semibold">
              Resources available: Sample syllabi, AI policy templates, and prompt libraries for CS education
            </p>
          </motion.div>
        </div>
      )
    },
    
    // Slide 8: Q&A
    {
      title: "Questions & Discussion",
      subtitle: "",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-6">Questions & Discussion</h2>
            
            <div className="mb-8">
              <p className="text-xl text-gray-700">What aspects of LLM technology are you most interested in exploring?</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow inline-block">
              <p className="text-lg text-blue-700 font-semibold">Contact for Follow-up Questions:</p>
              <p className="text-gray-600 mt-2">email@university.edu</p>
              <p className="text-gray-600">Faculty Innovation Office, Room 302</p>
            </div>
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-lg text-blue-700 font-semibold">Beyond ChatGPT: LLMs in CS Education</div>
        <div className="text-gray-500">Slide {currentSlide + 1} of {slides.length}</div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow overflow-hidden p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 h-full overflow-y-auto"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Controls */}
      <div className="bg-white shadow-md p-4 flex justify-between">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`px-4 py-2 rounded-md ${currentSlide === 0 ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`}
        >
          Previous
        </button>
        
        <div className="flex space-x-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`px-4 py-2 rounded-md ${currentSlide === slides.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Presentation;