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
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindBlockedDatesDto } from './dto/find-blocked-dates.dto';

@ApiTags('reservations')
@Controller()
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @ApiQuery({ name: 'start', required: false })
  @ApiQuery({ name: 'end', required: false })
  @ApiResponse({ status: HttpStatus.OK, type: [String] })
  @Get('/properties/:id/busy-dates')
  async findBlockedDates(
    @Res() res: Response,
    @Param() params: FindBlockedDatesDto,
    @Query('start') start?: string,
    @Query('end') end?: string,
  ) {
    try {
      const blockedDates = await this.reservationService.findBlockedDates(
        params.id,
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
