import { Module } from '@nestjs/common';
import { AgentModule } from '@boldare/openai-assistant';
import { HttpModule } from '@nestjs/axios';
import { WeatherService } from './weather.service';
import { GetCurrentWeatherAgentBase } from './getCurrentWeatherAgentBase.service';

@Module({
  imports: [AgentModule, HttpModule],
  providers: [WeatherService, GetCurrentWeatherAgentBase],
})
export class WeatherAgentModule {}
