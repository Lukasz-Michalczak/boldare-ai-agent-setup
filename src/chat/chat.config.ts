import { AssistantCreateParams } from 'openai/resources/beta';
import { AssistantConfigParams } from '@boldare/openai-assistant';
import 'dotenv/config';

export const assistantParams: AssistantCreateParams = {
  name: 'mój chatbot',
  instructions: `You are a chatbot assistant. Use the general knowledge to answer questions. Speak briefly and clearly.`,
  tools: [{ type: 'code_interpreter' }, { type: 'file_search' }],
  model: 'gpt-4-turbo',
  temperature: 0.05,
};

export const assistantConfig: AssistantConfigParams = {
  id: process.env['ASSISTANT_ID'] || '',
  params: assistantParams,
  filesDir: './src/knowledge',
  toolResources: {
    fileSearch: {
      boldare: ['33-things-to-ask-your-digital-product-development-partner.md'],
    },
    codeInterpreter: {
      fileNames: [],
    },
  },
};
