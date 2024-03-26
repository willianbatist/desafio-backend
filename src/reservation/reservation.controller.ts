import { Controller, Get, Param } from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller()
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get('/properties/:id/busy-dates')
  findOne(@Param('id') id: string) {
    return this.reservationService.findPropertyId(id);
  }
}
