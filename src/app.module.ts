import { Module } from '@nestjs/common';
import { ReservationModule } from './reservation/reservation.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ReservationModule,
    MongooseModule.forRoot(
      'mongodb://admin:adminpassword@db:27017/admin',
    ),
  ],
})
export class AppModule {}
