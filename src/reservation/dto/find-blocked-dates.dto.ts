import { ApiProperty } from '@nestjs/swagger';

export class FindBlockedDatesDto {
  @ApiProperty({
    example: '56b3aa2578dc1a90d3de53ee',
    description: 'ID da propriedade',
  })
  id: string;

  @ApiProperty({
    required: false,
    example: '2024-04-01',
    description: 'Data de início',
  })
  start?: string;

  @ApiProperty({
    required: false,
    example: '2024-04-10',
    description: 'Data de término',
  })
  end?: string;
}
