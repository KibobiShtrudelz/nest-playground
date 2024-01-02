import { Get, Post, Body, Controller } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/sign-in')
  signIn(@Body('email') email: string, @Body('password') password: string) {
    return this.appService.signIn({ email, password });
  }
}
