import { ApiProperty } from '@nestjs/swagger';

export class loginDto {
  @ApiProperty({
    description: 'User Name',
    example: 'kushal',
  })
  readonly userName: string;

  @ApiProperty({
    description: 'Password of the user',
    example: '#####',
  })
  readonly password: string;
}
