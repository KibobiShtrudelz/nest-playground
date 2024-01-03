import { Injectable } from '@nestjs/common'

async function delay(ms: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, ms))
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  async signIn({ email, password }) {
    // return {
    //   id: 'partsutsa-uuid-ne-aidi-ti',
    //   email,
    //   name: 'Dementsio Kolev',
    // };

    return delay(1500).then(() => {
      return {
        id: 'partsutsa-uuid-ne-aidi-ti',
        email,
        password
      }
    })
  }
}
