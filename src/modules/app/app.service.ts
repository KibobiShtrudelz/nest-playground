import { Injectable } from '@nestjs/common'

import { SignInDto } from '../../dtos'

async function delay(ms: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, ms))
}

@Injectable()
export class AppService {
  async signIn({ email, password }: SignInDto) {
    return delay(1500).then(() => {
      return {
        id: 'partsutsa-uuid-ne-aidi-ti',
        email,
        password
      }
    })
  }
}
