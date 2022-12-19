import { ApiProperty } from '@nestjs/swagger';

export class paymentDto {
  @ApiProperty({
    description: 'Card Number',
    example: '1234 5678 1234 5678',
  })
  readonly cardNumber: string;

  @ApiProperty({
    description: 'Expiry Date',
    example: '01/02',
  })
  readonly expiryDate: string;

  @ApiProperty({
    description: 'CVV',
    example: '355',
  })
  readonly cvv: number;

  @ApiProperty({
    description: 'Name',
    example: 'Kushal',
  })
  readonly name: string;
}
