import { Test, TestingModule } from '@nestjs/testing';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { HttpStatus } from '@nestjs/common';

describe('ReservationController', () => {
  let controller: ReservationController;
  let reservationService: ReservationService;

  beforeEach(async () => {
    const reservationServiceMock = {
      findBlockedDates: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationController],
      providers: [
        { provide: ReservationService, useValue: reservationServiceMock },
      ],
    }).compile();

    controller = module.get<ReservationController>(ReservationController);
    reservationService = module.get<ReservationService>(ReservationService);
  });

  it('deve definir ReservationController', () => {
    expect(controller).toBeDefined();
  });

  it('deve retornar um array de datas bloqueadas e status OK', async () => {
    const blockedDates = [
      '2024-04-01',
      '2024-04-04',
      '2024-04-05',
      '2024-05-01',
      '2024-05-02',
      '2024-05-10',
      '2024-07-01',
      '2024-12-10',
    ];
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const params = { id: '123' };
    const start = '2024-04-01';
    const end = '2024-12-10';

    (reservationService.findBlockedDates as jest.Mock).mockResolvedValueOnce(
      blockedDates,
    );

    await controller.findBlockedDates(res as any, params as any, start, end);

    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(res.json).toHaveBeenCalledWith(blockedDates);
  });
});
