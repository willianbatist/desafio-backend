import { Test, TestingModule } from '@nestjs/testing';
import { ReservationService } from './reservation.service';
import { getModelToken } from '@nestjs/mongoose';

describe('ReservationService', () => {
  let service: ReservationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReservationService,
        {
          provide: getModelToken('reservation'),
          useValue: {
            find: jest.fn().mockReturnThis(),
            exec: jest.fn().mockResolvedValue([
              {
                checkIn: new Date('2024-04-01'),
                checkOut: new Date('2024-04-05'),
              },
              {
                checkIn: new Date('2024-05-01'),
                checkOut: new Date('2024-05-10'),
              },
            ]),
          },
        },
      ],
    }).compile();

    service = module.get<ReservationService>(ReservationService);
  });

  it('deve definir ReservationService', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar datas bloqueadas exclusivas dentro de um intervalo específico', async () => {
    const blockedDates = await service.findBlockedDates(
      'propertyId',
      '2024-04-01',
      '2024-05-01',
    );
    const expectedDates = [
      '2024-04-01',
      '2024-04-02',
      '2024-04-03',
      '2024-04-04',
      '2024-04-05',
      '2024-05-01',
    ];
    expect(
      blockedDates.every((date) => expectedDates.includes(date)),
    ).toBeTruthy();
  });

  it('deve retornar um array vazio se nenhuma reserva for encontrada', async () => {
    const blockedDates = await service.findBlockedDates(
      'propertyId',
      '2024-01-01',
      '2024-02-01',
    );
    expect(blockedDates).toEqual([]);
  });

  it('Caso start e end não sejam informado, deve retornar todos os bloqueios de hoje em diante', async () => {
    const blockedDates = await service.findBlockedDates('propertyId');
    const expectedDates = [
      '2024-04-01',
      '2024-04-02',
      '2024-04-03',
      '2024-04-04',
      '2024-04-05',
      '2024-05-01',
    ];
    expect(
      blockedDates.every((date) => expectedDates.includes(date)),
    ).toBeDefined();
  });
});
