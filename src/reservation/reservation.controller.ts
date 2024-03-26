import { Controller, Get, Param, Query } from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller()
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}
  // GET /properties/123/busy-dates?start=2024-01-01&end=2024-01-30

  // @Get('/properties/:id/busy-dates')
  // async find(
  //   @Param('id') id: string,
  //   @Query('start') start?: string,
  //   @Query('end') end?: string,
  // ) {
  //   console.log(start, 'start');
  //   console.log(end, 'end');
  //   console.log(id, 'id');
  //   // return await this.reservationService.findPropertyId(id);
  // }

  @Get('/properties/:id/busy-dates')
  async findBlockedDates(
    @Param('id') id: string,
    @Query('start') start?: string,
    @Query('end') end?: string,
  ) {
    const blockedDates = await this.reservationService.findBlockedDates(
      id,
      start,
      end,
    );
    return blockedDates;
  }
}
