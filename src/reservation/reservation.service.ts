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
    // Montar o filtro para a consulta
    const filter: any = { propertyId };

    // Se start e end forem fornecidos, adicione ao filtro
    if (start && end) {
      filter.$or = [
        { checkIn: { $gte: start, $lt: end } },
        { checkOut: { $gt: start, $lte: end } },
        { $and: [{ checkIn: { $lte: start } }, { checkOut: { $gte: end } }] },
      ];
    }

    // Consulta no banco de dados
    const reservations = await this.reservationModel.find(filter).exec();

    // Criar um array de datas bloqueadas
    const blockedDates: string[] = [];
    reservations.forEach((reservation) => {
      // Converter para o fuso horário local antes de formatar
      const checkInDate = new Date(reservation.checkIn);
      const checkOutDate = new Date(reservation.checkOut);

      // Subtrair um dia para corrigir a diferença
      checkInDate.setDate(checkInDate.getDate() - 1);
      checkOutDate.setDate(checkOutDate.getDate() - 1);

      // Adicionar datas ao array
      blockedDates.push(checkInDate.toISOString().split('T')[0]);
      blockedDates.push(checkOutDate.toISOString().split('T')[0]);
    });

    // Filtrar e retornar datas únicas dentro do intervalo
    const uniqueBlockedDates = blockedDates
      .filter(
        (date, index, self) =>
          self.indexOf(date) === index && date >= start && date <= end,
      )
      .sort();

    return uniqueBlockedDates;
  }
}
