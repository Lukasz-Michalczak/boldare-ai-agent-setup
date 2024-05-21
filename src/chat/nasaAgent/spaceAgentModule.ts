import { Module } from '@nestjs/common';
import { AgentModule } from '@boldare/openai-assistant';
import { HttpModule } from '@nestjs/axios';
import { SpaceService } from './spcae.service';
import { GetSpaceInfoAgentBase } from './getAsteroidsInfoAgentBase';

@Module({
  imports: [AgentModule, HttpModule],
  providers: [SpaceService, GetSpaceInfoAgentBase],
})
export class SpaceAgentModule {}
