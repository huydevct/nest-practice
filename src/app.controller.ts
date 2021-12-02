import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import {
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  /*
  @Get(':id')
  async getHello(@Param('id') id: number): Promise<any> {
    // this.appService.seed();
    // return this.appService.getEmployeeById(2);
    return this.appService.deleteEmployee(id);
  }*/

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user); //TOD: return jwt access token
  }

  // @UseGuards(AuthenticatedGuard)
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  log(@Request() req): string { //TODO: require an Bearer token, validate token
    return req.user;
  }
}
