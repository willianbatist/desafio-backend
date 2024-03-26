import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation } from './schemas/reservation.schema';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel('reservation') // Corrigido para corresponder ao nome do modelo no MongooseModule.forFeature
    private readonly reservationModel: Model<Reservation>,
  ) {}

  async findPropertyId(propertyId: string) {
    return await this.reservationModel.find({ propertyId }).exec();
  }
}
