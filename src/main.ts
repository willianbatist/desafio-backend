import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Documentação API - Reservation Housi')
    .setDescription(
      'Esta API backend foi desenvolvida com o objetivo de gerenciar reservas, utilizando MongoDB como banco de dados. Sua funcionalidade principal é fornecer um conjunto de datas bloqueadas, conforme especificado em um intervalo de tempo definido pelo usuário.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
