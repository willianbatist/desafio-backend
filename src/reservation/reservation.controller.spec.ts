import { Test, TestingModule } from '@nestjs/testing';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';

describe('ReservationController', () => {
  let controller: ReservationController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let reservationService: ReservationService;

  beforeEach(async () => {
    const reservationServiceMock = {
      findPropertyId: jest.fn(),
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

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
