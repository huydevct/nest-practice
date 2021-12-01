import { Controller, Get, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  async getHello(@Param('id') id: number): Promise<any> {
    // this.appService.seed();
    // return this.appService.getEmployeeById(2);
  return this.appService.deleteEmployee(id);
    
  }
}
