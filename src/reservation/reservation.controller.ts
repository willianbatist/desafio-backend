import {
  Controller,
  Get,
  Param,
  Query,
  HttpStatus,
  HttpException,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ReservationService } from './reservation.service';

@Controller()
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get('/properties/:id/busy-dates')
  async findBlockedDates(
    @Res() res: Response,
    @Param('id') id: string,
    @Query('start') start?: string,
    @Query('end') end?: string,
  ) {
    try {
      const blockedDates = await this.reservationService.findBlockedDates(
        id,
        start,
        end,
      );
      return res.status(HttpStatus.OK).json(blockedDates);
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }
}
