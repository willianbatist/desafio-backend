import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation } from './schemas/reservation.schema';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel('reservation')
    private readonly reservationModel: Model<Reservation>,
  ) {}

  async findBlockedDates(propertyId: string, start?: string, end?: string) {
    const filter: any = { propertyId };

    const dateNow = new Date();

    if (start && end) {
      filter.$or = [
        { checkIn: { $gte: start, $lte: end } },
        { checkOut: { $gt: start, $lte: end } },
      ];
    } else {
      filter.$or = [{ checkIn: { $gte: dateNow } }];
    }
    const reservations = await this.reservationModel.find(filter).exec();

    const blockedDates: string[] = [];
    reservations.forEach((reservation) => {
      blockedDates.push(reservation.checkIn.toISOString().split('T')[0]);
      blockedDates.push(reservation.checkOut.toISOString().split('T')[0]);
    });
    let uniqueBlockedDates = [];

    if (start && end) {
      uniqueBlockedDates = blockedDates
        .filter(
          (date, index, self) =>
            self.indexOf(date) === index && date >= start && date <= end,
        )
        .sort();
    } else {
      uniqueBlockedDates = blockedDates
        .filter((date, index) => {
          return blockedDates.indexOf(date) === index;
        })
        .sort();
    }
    return uniqueBlockedDates;
  }
}
