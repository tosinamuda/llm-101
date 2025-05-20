import React from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  TextArea,
  Button,
  Tabs,
  TabList,
  Tab,
  Select,
  SelectItem,
  InlineNotification,
  IconButton,
} from '@carbon/react';
import { Add, TrashCan, Settings, Information, Close, ChevronUp } from '@carbon/react/icons';

// Define the form schema with Zod
const promptFormSchema = z.object({
  model: z.string().min(1, 'Model selection is required'),
  instruction: z.string().optional(),
  examples: z.array(z.object({
    input: z.string(),
    output: z.string(),
  })).optional(),
  testInput: z.string().optional(),
});

// TypeScript type derived from the schema
type PromptFormValues = z.infer<typeof promptFormSchema>;

// Default form values
const defaultValues: PromptFormValues = {
  model: 'granite-9-3b-instruct',
  instruction: '',
  examples: [{ input: '', output: '' }],
  testInput: '',
};

/* ------------------------------------------------------------------
   🖼️  Slide 6 – watsonx.ai Prompt Lab Interface
   ------------------------------------------------------------------*/
export default function PromptLab() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [testOutput, setTestOutput] = React.useState('');
  const [showHint, setShowHint] = React.useState(true);
  
  const { control, handleSubmit, watch, setValue } = useForm<PromptFormValues>({
    resolver: zodResolver(promptFormSchema),
    defaultValues,
  });

  const examples = watch('examples') || [];

  const addExample = () => {
    setValue('examples', [...examples, { input: '', output: '' }]);
  };

  const removeExample = (index: number) => {
    setValue('examples', examples.filter((_, i) => i !== index));
  };

  const onSubmit = (data: PromptFormValues) => {
    console.log('Form submitted:', data);
    // In a real app, this would call the AI API
    setTestOutput('This is a simulated response from the model based on your input.');
  };

  // Handle tab change manually to accommodate Carbon's API
  const handleTabChange = (data: { selectedIndex: number }) => {
    setActiveTab(data.selectedIndex);
  };

  return (
    <div className="flex flex-col h-full p-1.5 bg-[#f4f4f4] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white flex-grow shadow-sm border border-[#e0e0e0] overflow-hidden flex flex-col"
      >
        {/* Mock watsonx.ai Interface Header */}
        <div className="bg-[#161616] text-white p-0.75 flex items-center">
          <svg width="1.5rem" height="1.5rem" viewBox="0 0 32 32" fill="white" className="mr-0.5">
            <path d="M27,22.1V9.9a7,7,0,0,0-3.5-6.1L12.9,0a5.6,5.6,0,0,0-6.5,1.2,5.6,5.6,0,0,0-1.2,6.5,7,7,0,0,0,3.5,6.1l10.6,3.8a5.6,5.6,0,0,0,6.5-1.2A5.9,5.9,0,0,0,27,22.1ZM8.9,3.9a3.5,3.5,0,0,1,4.5-.5l5,1.8a7,7,0,0,0-2.3,6,7,7,0,0,0,2.3,5l-5,1.8a3.5,3.5,0,0,1-4.5-.5,3.8,3.8,0,0,1-.5-4.5A4.9,4.9,0,0,1,11,10L7.2,8.2A3.8,3.8,0,0,1,8.9,3.9Z"/>
          </svg>
          <span className="font-medium">watsonx.ai Prompt Lab</span>
          <div className="ml-auto flex gap-0.5">
            <div className="px-0.5 py-0.125 text-xs bg-[#0f62fe] rounded-sm">Granite-9B</div>
            <div className="px-0.5 py-0.125 text-xs bg-[#393939] rounded-sm">Temperature: 0.7</div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <Tabs selectedIndex={activeTab} onChange={handleTabChange}>
          <TabList aria-label="Prompt lab tabs" contained>
            <Tab>Chat</Tab>
            <Tab>Structured</Tab>
            <Tab>Freeform</Tab>
          </TabList>
        </Tabs>

        {/* Hint Notification */}
        {showHint && (
          <InlineNotification
            kind="info"
            title=""
            subtitle="This model works better when you provide at least 1 example."
            hideCloseButton={false}
            onCloseButtonClick={() => setShowHint(false)}
            className="w-full mb-0"
          />
        )}

        <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-grow overflow-hidden">
          {/* Model Selection */}
          <div className="flex px-1 py-0.75 border-b border-[#e0e0e0] items-center">
            <div className="text-sm mr-0.5">Model: </div>
            <div className="w-64">
              <Controller
                name="model"
                control={control}
                render={({ field }) => (
                  <Select 
                    id="model-select"
                    labelText=""
                    hideLabel
                    {...field}
                  >
                    <SelectItem value="granite-9-3b-instruct" text="granite-9-3b-instruct" />
                    <SelectItem value="granite-13b-instruct" text="granite-13b-instruct" />
                    <SelectItem value="llama-2-70b" text="llama-2-70b" />
                    <SelectItem value="meta-llama-3-8b" text="meta-llama-3-8b" />
                    <SelectItem value="meta-llama-3-70b" text="meta-llama-3-70b" />
                  </Select>
                )}
              />
            </div>
            <div className="flex ml-auto items-center">
              <Button 
                kind="ghost" 
                size="sm" 
                className="mr-0.5"
                renderIcon={Settings}
                iconDescription="Parameters"
              >
                Parameters
              </Button>
              <Button 
                kind="ghost" 
                size="sm"
                renderIcon={Information}
                iconDescription="Help"
              >
                Help
              </Button>
            </div>
          </div>
          
          <div className="flex-grow overflow-auto scrollbar-hide">
            {/* Setup Section */}
            <div className="border-b border-[#e0e0e0] p-1">
              <div className="flex items-center mb-0.75">
                <h3 className="text-[#161616] font-medium">Set up</h3>
                <IconButton
                  label="Toggle section"
                  kind="ghost"
                  size="sm"
                  className="ml-0.5"
                >
                  <ChevronUp />
                </IconButton>
              </div>
              
              <div className="mb-1">
                <Controller
                  name="instruction"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      id="instruction"
                      labelText="Instruction (optional)"
                      helperText="Tell the model what to do. For example: Summarize the transcript."
                      rows={2}
                      {...field}
                    />
                  )}
                />
              </div>
              
              <div>
                <p className="text-sm font-medium mb-0.5">Examples (optional)</p>
                
                {examples.map((example, index) => (
                  <div key={index} className="flex mb-1 items-start">
                    <div className="w-1/2 pr-0.5">
                      <Controller
                        name={`examples.${index}.input`}
                        control={control}
                        render={({ field }) => (
                          <TextArea
                            id={`example-input-${index}`}
                            labelText="Input:"
                            rows={3}
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div className="w-1/2 pl-0.5">
                      <Controller
                        name={`examples.${index}.output`}
                        control={control}
                        render={({ field }) => (
                          <TextArea
                            id={`example-output-${index}`}
                            labelText="Output:"
                            rows={3}
                            {...field}
                          />
                        )}
                      />
                    </div>
                    {index > 0 && (
                      <Button
                        kind="ghost"
                        size="sm"
                        renderIcon={TrashCan}
                        iconDescription="Remove example"
                        hasIconOnly
                        onClick={() => removeExample(index)}
                        className="ml-0.5 mt-2"
                      />
                    )}
                  </div>
                ))}
                
                <Button
                  kind="ghost"
                  size="sm"
                  onClick={addExample}
                  renderIcon={Add}
                >
                  Add example
                </Button>
              </div>
            </div>
            
            {/* Try Section */}
            <div className="p-1">
              <div className="flex items-center mb-0.75">
                <h3 className="text-[#161616] font-medium">Try</h3>
                <IconButton
                  label="Toggle section"
                  kind="ghost"
                  size="sm"
                  className="ml-0.5"
                >
                  <ChevronUp />
                </IconButton>
              </div>
              
              <div className="text-sm text-[#525252] mb-0.5">Test your prompt</div>
              
              <div className="flex">
                <div className="w-1/2 pr-0.5 flex flex-col">
                  <Controller
                    name="testInput"
                    control={control}
                    render={({ field }) => (
                      <TextArea
                        id="test-input"
                        labelText="Input:"
                        rows={6}
                        className="flex-grow"
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="w-1/2 pl-0.5 flex flex-col">
                  <p className="text-sm mb-0.25">Output:</p>
                  <div 
                    className="w-full p-0.75 border border-[#e0e0e0] text-sm bg-[#f4f4f4] flex-grow rounded-sm h-[10.625rem] overflow-auto scrollbar-hide"
                  >
                    {testOutput ? (
                      <p>{testOutput}</p>
                    ) : (
                      <p className="text-[#8d8d8d]">Generated output appears here.</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex mt-1">
                <Button
                  kind="tertiary"
                  size="sm"
                  renderIcon={Add}
                >
                  New test
                </Button>
                
                <div className="ml-auto flex items-center">
                  <Button
                    kind="ghost"
                    size="sm"
                    renderIcon={Close}
                    onClick={() => setTestOutput('')}
                    className="mr-1"
                    disabled={!testOutput}
                  >
                    Clear output
                  </Button>
                  
                  <Button
                    type="submit" 
                    size="md"
                    className={testOutput ? "bg-[#0f62fe]" : "bg-[#8d8d8d]"}
                  >
                    Generate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-1 flex justify-between items-center"
      >
        <div className="flex items-center text-xs text-[#6f6f6f]">
          <div className="w-0.75 h-0.75 bg-[#0f62fe] mr-0.5"></div>
          <span>Interactive interface for rapid prototyping</span>
        </div>
        
        <div className="bg-[#0f62fe] text-white px-0.75 py-0.25 text-xs">
          Try it at watsonx.ai
        </div>
      </motion.div>
    </div>
  );
}

