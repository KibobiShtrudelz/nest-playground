import { NestFactory } from '@nestjs/core'

import { AppModule } from './modules'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: `http://localhost:4200`,
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })

  await app.listen(3333)
}

bootstrap()
