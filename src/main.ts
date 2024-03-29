import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const config =new DocumentBuilder()
  .setTitle('Connect')
  .setDescription('No description')
  .addBearerAuth()
  
}
bootstrap();
