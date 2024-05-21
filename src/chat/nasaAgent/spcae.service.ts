import { HttpException, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class SpaceService {
  private readonly logger = new Logger(SpaceService.name);

  constructor(private httpService: HttpService) {}

  async getAsteroidsInfo(date: string) {
    const params = {
      start_date: date,
      end_date: date,
      api_key: process.env['NASA_API_KEY'],
    };
    const { data } = await firstValueFrom(
      this.httpService
        .get('https://api.nasa.gov/neo/rest/v1/feed', { params })
        .pipe(
          catchError((error: AxiosError) => {
            const message = error?.response?.data || {
              message: 'Unknown error',
            };
            this.logger.error(message);
            throw new HttpException(message, error?.response?.status || 500);
          }),
        ),
    );

    return data;
  }
}
