import { Module } from '@nestjs/common';
import { AssistantModule } from '@boldare/openai-assistant';
import { assistantConfig } from './chat.config';
import { ChatSockets } from './chat.sockets';
import { WeatherAgentModule } from './weatherAgent/weatherAgentModule';
import { SpaceAgentModule } from './nasaAgent/spaceAgentModule';

@Module({
  imports: [
    WeatherAgentModule,
    SpaceAgentModule,
    AssistantModule.forRoot(assistantConfig),
  ],
  providers: [ChatSockets],
})
export class ChatbotModule {}
