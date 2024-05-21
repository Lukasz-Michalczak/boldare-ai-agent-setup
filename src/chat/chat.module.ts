import { Module } from '@nestjs/common';
import { AssistantModule } from '@boldare/openai-assistant';
import { assistantConfig } from './chat.config';
import { ChatSockets } from './chat.sockets';
import { WeatherAgentModule } from './weatherAgent/weatherAgentModule';

@Module({
  imports: [WeatherAgentModule, AssistantModule.forRoot(assistantConfig)],
  providers: [ChatSockets],
})
export class ChatbotModule {}
