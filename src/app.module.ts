import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationModule } from './reservation/reservation.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ReservationModule,
    MongooseModule.forRoot(
      'mongodb://admin:adminpassword@localhost:27017/housi',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
