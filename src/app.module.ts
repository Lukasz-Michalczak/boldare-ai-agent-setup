import { Module } from '@nestjs/common';
import { ChatbotModule } from './chat/chat.module';

@Module({
  imports: [ChatbotModule],
})
export class AppModule {}
