import { Injectable } from '@nestjs/common';
import { AgentBase, AgentData, AgentService } from '@boldare/openai-assistant';
import { FunctionTool } from 'openai/resources/beta';
import { SpaceService } from './spcae.service';

@Injectable()
export class GetSpaceInfoAgentBase extends AgentBase {
  override definition: FunctionTool = {
    type: 'function',
    function: {
      name: this.constructor.name,
      description: 'Get the asteroid information for the given date',
      parameters: {
        type: 'object',
        properties: {
          date: {
            type: 'string',
            description:
              'Date for which the asteroid information is requested. The date should be in the format YYYY-MM-DD.',
          },
        },
        required: ['date'],
      },
    },
  };

  constructor(
    override readonly agentService: AgentService,
    private readonly spaceService: SpaceService,
  ) {
    super(agentService);
  }

  override async output(data: AgentData): Promise<string> {
    try {
      // Parse the parameters from the input data
      const params = JSON.parse(data.params);
      const date = params?.date;

      // Check if the city is provided
      if (!date) {
        return 'No date provided';
      }

      // Get the current weather for the city
      const asteroidsInfo = await this.spaceService.getAsteroidsInfo(date);

      // Return the result
      return `Info for ${date} is: ${JSON.stringify(asteroidsInfo)}`;
    } catch (errors) {
      // Handle the errors
      return `Invalid data: ${JSON.stringify(errors)}`;
    }
  }
}
