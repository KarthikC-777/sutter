import { ApiProperty } from '@nestjs/swagger';

export class planDto {
  @ApiProperty({
    description: 'Choose Your Plan',
    example: 'option 1',
  })
  readonly plan: string;
  // @ApiProperty({
  //   description: 'Plan Price',
  //   example: '$30',
  // })
  // readonly planPrice: number;
}
