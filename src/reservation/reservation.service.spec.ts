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
          provide: getModelToken('reservation'), // Use getModelToken para obter o token do modelo
          useValue: {}, // Fornecer uma instância mock vazia para o modelo
        },
      ],
    }).compile();

    service = module.get<ReservationService>(ReservationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
