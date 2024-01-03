import { Post, Body, Controller } from '@nestjs/common'

import { AppService } from './app.service'

import { SignInDto } from '../../dtos'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/sign-in')
  signIn(@Body() { email, password }: SignInDto) {
    return this.appService.signIn({ email, password })
  }
}
