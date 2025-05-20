import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DocumentAdd,
  Task,
  Code,
  Help,
  FolderAdd,
  Events,
  ArrowLeft
} from '@carbon/react/icons';
import {
  Button,
  TextArea,
  Form
} from '@carbon/react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

/* ------------------------------------------------------------------
   🖼️  Educational Use Cases Demo
   ------------------------------------------------------------------*/

// Define the form schema with Zod
const promptFormSchema = z.object({
  systemPrompt: z.string().min(1, 'System prompt is required'),
  userPrompt: z.string().min(1, 'User prompt is required'),
});

// TypeScript type derived from the schema
type PromptFormValues = z.infer<typeof promptFormSchema>;

export default function EducationalDemos() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Initialize React Hook Form with Zod validation - moved outside conditional
  const { control, handleSubmit, formState: { errors, isValid }, reset } = useForm<PromptFormValues>({
    resolver: zodResolver(promptFormSchema),
    defaultValues: {
      systemPrompt: "",
      userPrompt: "",
    },
    mode: "onChange"
  });

  const demos = [
    {
      id: 'lecture-summarization',
      title: 'Lecture Summarization',
      icon: <DocumentAdd size={32} />,
      description: 'Quickly generate concise summaries of recorded lectures or class notes to aid in revision and understanding.',
      buttonText: 'Try Summarization',
      useCaseDescription: "Summarize a lecture on Introduction to Machine Learning, focusing on key algorithms and applications.",
      exampleUseCase: `Summarize the following lecture on 'Introduction to Machine Learning':\n\nLecture on 'Introduction to Machine Learning':\n\nWelcome to our introduction to Machine Learning. Today we'll cover the fundamental concepts and approaches in this exciting field.\n\nMachine Learning is a subset of artificial intelligence that focuses on building systems that learn from data. Unlike traditional programming where we explicitly code rules, machine learning algorithms identify patterns and make decisions with minimal human intervention.\n\nWe'll focus on two primary categories:\n\n1. Supervised Learning:\n   - Definition: Learning from labeled training data
   - The algorithm learns a mapping function from input to output
   - Examples include:
     * Linear Regression: Predicts continuous values (e.g., house prices)
     * Decision Trees: Creates a model that predicts the value of a target variable
     * Support Vector Machines: Classifies data by finding the hyperplane that best divides categories
   - Applications: Spam detection, image classification, weather forecasting

2. Unsupervised Learning:\n   - Definition: Learning from unlabeled data
   - The algorithm finds patterns or intrinsic structures in the input data
   - Examples include:
     * K-means Clustering: Groups similar data points together
     * Principal Component Analysis: Reduces dimensionality while preserving variance
     * Association Rules: Discovers interesting relations between variables
   - Applications: Market segmentation, anomaly detection, recommendation systems

Key algorithms we'll explore further in this course include:
- Neural Networks: Inspired by the human brain, capable of deep learning
- Random Forests: Ensemble learning method using multiple decision trees
- Gradient Boosting: Sequential ensemble technique that builds on weak learners

Applications of these techniques are widespread across industries:
- Healthcare: Disease prediction and diagnosis
- Finance: Credit scoring and fraud detection
- Retail: Customer behavior analysis and inventory management
- Transportation: Traffic prediction and autonomous vehicles

In our next sessions, we'll dive deeper into each of these algorithms and implement them using Python libraries like scikit-learn and TensorFlow.`,
      systemPromptTemplate: 'You are an AI assistant specializing in summarizing computer science lectures. Focus on extracting key algorithms, data structures, and theoretical concepts. Provide a concise summary that captures the main points.',
      simulatedResponse: 'The lecture provided an overview of supervised learning, including algorithms like linear regression and decision trees, and unsupervised learning with k-means clustering. Applications in image recognition and data analysis were highlighted.'
    },
    {
      id: 'project-task',
      title: 'Project Task Generation',
      icon: <Task size={32} />,
      description: 'Automatically generate detailed project tasks or term paper topics tailored to course objectives.',
      buttonText: 'Generate Task',
      useCaseDescription: "Create a project outline for a term paper on AI in Cybersecurity.",
      exampleUseCase: "Develop a detailed project outline for a term paper on 'The Role of Artificial Intelligence in Cybersecurity', including key topics to cover, research questions, and expected outcomes.",
      systemPromptTemplate: 'You are a project planning assistant for computer science courses. Create detailed project outlines with clear milestones, objectives, and deliverables related to software development.',
      simulatedResponse: "The project outline includes sections on AI techniques in cybersecurity, ethical considerations, and future trends. Key research questions focus on AI's impact on threat detection and prevention. Expected outcomes include a comprehensive analysis of AI's role in enhancing cybersecurity measures."
    },
    {
      id: 'starter-code',
      title: 'Starter Code Creation',
      icon: <Code size={32} />,
      description: 'Generate starter code templates for assignments to help students get started with their coding tasks.',
      buttonText: 'Generate Code',
      useCaseDescription: "Create starter code for an academic paper search engine.",
      exampleUseCase: 'Provide starter code for a Python script that implements a search engine for academic papers, including functions for web scraping, data parsing, and search query handling.',
      systemPromptTemplate: 'You are a programming assistant that provides clean, well-documented starter code templates for computer science assignments. Include comments explaining key sections and structure.',
      simulatedResponse: 'The starter code includes a Python script with functions for web scraping using BeautifulSoup, data parsing with Pandas, and search query handling with a simple keyword matching algorithm. Comments and example usage are provided for clarity.'
    },
    {
      id: 'quiz-generation',
      title: 'Quiz Question Generation',
      icon: <Help size={32} />,
      description: 'Create quiz questions from lecture notes or textbooks to test student understanding and retention.',
      buttonText: 'Generate Questions',
      useCaseDescription: "Generate quiz questions on data structures and algorithms.",
      exampleUseCase: "Generate five multiple-choice questions for a quiz on 'Data Structures', focusing on arrays, linked lists, and their time complexities.",
      systemPromptTemplate: 'You are an educational assessment specialist for computer science. Create varied quiz questions that test understanding of programming concepts and algorithms.',
      simulatedResponse: '1. What is the time complexity of accessing an element in an array? O(1)\n2. How does a linked list differ from an array in terms of memory allocation?\n3. Which data structure is best for implementing a queue?\n4. Explain the concept of a stack and its applications.\n5. What is the time complexity of inserting an element into a linked list? O(n)'
    },
    {
      id: 'material-classification',
      title: 'Course Material Classification',
      icon: <FolderAdd size={32} />,
      description: 'Organize and classify course materials by topic or difficulty to streamline access and study.',
      buttonText: 'Classify Materials',
      useCaseDescription: "Organize materials by programming paradigms.",
      exampleUseCase: 'Organize the provided lecture notes and readings into categories based on programming paradigms: procedural, object-oriented, and functional programming.',
      systemPromptTemplate: 'You are a content organization specialist for computer science courses. Analyze educational materials and organize them into logical categories based on programming languages, algorithms, and software engineering principles.',
      simulatedResponse: 'Materials have been categorized into Procedural Programming, Object-Oriented Programming, and Functional Programming, with subcategories for each paradigm, including examples and key concepts.'
    },
    {
      id: 'automated-feedback',
      title: 'Automated Feedback',
      icon: <Events size={32} />,
      description: 'Provide instant, AI-generated feedback on student assignments, highlighting strengths and areas for improvement.',
      buttonText: 'Get Feedback',
      useCaseDescription: "Review a software engineering project report.",
      exampleUseCase: "Provide feedback on a draft of a student project report for 'Software Engineering', focusing on code quality, adherence to design patterns, and documentation.",
      systemPromptTemplate: 'You are a constructive academic reviewer for computer science assignments. Provide balanced feedback that acknowledges strengths while offering specific suggestions for improvement in coding practices and software design.',
      simulatedResponse: 'The report demonstrates a strong understanding of software engineering principles, with well-structured code and clear documentation. Suggestions for improvement include enhancing variable naming conventions and adding more comments for clarity.'
    }
  ];

  const handleDemoClick = (demoId: string) => {
    const selectedDemo = demos.find(demo => demo.id === demoId);
    if (selectedDemo) {
      setActiveDemo(demoId);
      setOutput("");
      // Reset form with new values from the selected demo
      reset({
        systemPrompt: selectedDemo.systemPromptTemplate,
        userPrompt: selectedDemo.exampleUseCase
      });
    }
  };

  const handleBackClick = () => {
    setActiveDemo(null);
    setOutput("");
    reset();
  };

  const onSubmit = () => {
    setIsGenerating(true);
    // Simulate API call with timeout
    setTimeout(() => {
      const selectedDemo = demos.find(demo => demo.id === activeDemo);
      setOutput(selectedDemo?.simulatedResponse || '');
      setIsGenerating(false);
    }, 1500);
  };

  // Demo detail view
  if (activeDemo) {
    const selectedDemo = demos.find(demo => demo.id === activeDemo);
    
    return (
      <div className="flex flex-col h-full p-6 bg-[#f4f4f4] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 flex items-center"
        >
          <Button 
            kind="ghost" 
            renderIcon={ArrowLeft}
            onClick={handleBackClick}
            className="mr-4"
          >
            Back to demos
          </Button>
          <h2 className="text-2xl font-light text-[#161616]">
            {selectedDemo?.title}
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 border-l-4 border-[#0f62fe] shadow-sm mb-4 flex items-center"
        >
          <div className="text-[#0f62fe] mr-4">
            {selectedDemo?.icon}
          </div>
          <p className="text-[#525252]">
            {selectedDemo?.description}
          </p>
        </motion.div>
        
        <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
          <div className="flex-grow overflow-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left column - Inputs */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <Controller
                  name="systemPrompt"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      id="system-prompt"
                      labelText="System Prompt"
                      helperText={errors.systemPrompt ? errors.systemPrompt.message : "Instructions for the AI model behavior"}
                      invalid={!!errors.systemPrompt}
                      invalidText={errors.systemPrompt?.message}
                      {...field}
                      rows={5}
                      className="mb-4"
                      style={{ whiteSpace: 'pre-line', height: '200px', overflowY: 'auto' }}
                    />
                  )}
                />
                
                <Controller
                  name="userPrompt"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      id="user-prompt"
                      labelText="User Prompt"
                      helperText={errors.userPrompt ? errors.userPrompt.message : "Specific request or content to process"}
                      invalid={!!errors.userPrompt}
                      invalidText={errors.userPrompt?.message}
                      {...field}
                      rows={8}
                    />
                  )}
                />
              </motion.div>
              
              {/* Right column - Output */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col"
              >
                <p className="text-sm font-medium mb-2">Output</p>
                <div className="w-full p-4 border border-[#e0e0e0] rounded-sm bg-[#f4f4f4] flex-grow overflow-auto">
                  {isGenerating ? (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-[#525252]">Generating response...</p>
                    </div>
                  ) : output ? (
                    <p className="whitespace-pre-line">{output}</p>
                  ) : (
                    <p className="text-[#8d8d8d]">Generated content will appear here.</p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Fixed button at bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-6 left-6 right-6 flex justify-end bg-[#f4f4f4] pt-2"
          >
            <Button 
              type="submit"
              disabled={isGenerating || !isValid}
              className={isGenerating ? "opacity-70" : ""}
            >
              {isGenerating ? "Generating..." : "Generate"}
            </Button>
          </motion.div>
        </Form>
      </div>
    );
  }

  // Main grid view
  return (
    <div className="flex flex-col h-full p-6 bg-[#f4f4f4]">
      <div className="border-l-4 border-[#0f62fe] pl-4 mb-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-light text-[#161616] mb-2"
        >
          Educational <span className="font-medium">Use Cases</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[#525252]"
        >
          Practical applications for faculty and students
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {demos.map((demo, index) => (
          <motion.div
            key={demo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="bg-white border border-[#e0e0e0] shadow-sm hover:shadow transition-shadow group"
          >
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-[#0f62fe] mr-3">{demo.icon}</div>
                <h3 className="text-[#161616] text-lg font-medium">{demo.title}</h3>
              </div>
              
              <p className="text-sm text-[#525252] mb-4">
                {demo.description}
              </p>
              
              <div className="text-xs text-[#6f6f6f] italic mb-4">
                <span className="font-medium">Example:</span> {demo.useCaseDescription}
              </div>
              
              <div className="flex justify-end">
                <Button 
                  onClick={() => handleDemoClick(demo.id)}
                  className="group-hover:bg-[#0353e9] transition-colors"
                >
                  {demo.buttonText}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 flex justify-between items-center"
      >
        <div className="flex items-center text-xs text-[#6f6f6f]">
          <div className="w-3 h-3 bg-[#0f62fe] mr-2"></div>
          <span>Interactive demos with Granite models</span>
        </div>
        
        <div className="bg-[#0f62fe] text-white px-3 py-1 text-xs">
          Try with your own content
        </div>
      </motion.div>
    </div>
  );
} 