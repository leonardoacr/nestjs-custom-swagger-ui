import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('app')
  @Get('hello')
  @ApiOperation({
    summary: 'Return the hello world.',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
