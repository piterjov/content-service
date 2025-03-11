import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS (if needed for frontend access)
  app.enableCors();

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Content Microservice API')
    .setDescription('API documentation for the Content Microservice')
    .setVersion('1.0')
    .addBearerAuth() // Enables JWT Authentication in Swagger UI
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}

bootstrap();
