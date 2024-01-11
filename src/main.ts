import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from "@nestjs/swagger";
import { ConfigService as LocalConfig } from '../config';
import * as cookieParser from 'cookie-parser';

const whitelist = ['http://localhost:3001'];

const CORS_SETTINGS = {
  allowedHeaders: ['content-type'],
  origin: whitelist,
  credentials: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  
  app.enableCors(CORS_SETTINGS);
  const document = SwaggerModule.createDocument(app, new LocalConfig().getSwaggerConfig());
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);
  
  //app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('api/v1');
  // app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: {
  //     port: 7980
  //   }
  // });
  //await app.startAllMicroservices();
  const PORT = configService.get("PORT") || 7979;
  console.log(`[INFO] The server started on ${PORT} port`);

  await app.listen(PORT);
}

bootstrap();