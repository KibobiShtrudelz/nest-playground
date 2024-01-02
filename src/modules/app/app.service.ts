import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  signIn({ email, password }) {
    return {
      id: 'partsutsa-uuid-ne-aidi-ti',
      email,
      name: 'Dementsio Kolev',
    };
  }
}
