import { ApiProperty } from '@nestjs/swagger';

export class profileDto {
  @ApiProperty({
    description: 'Nickname of the user',
    example: 'kush',
  })
  readonly nickName: string;

  @ApiProperty({
    description: 'Age Group',
    example: '10-13',
  })
  readonly age: string;

  @ApiProperty({
    description: 'What applies to you',
    example: '[stress,bipoc]',
  })
  readonly requirement: string[];

  @ApiProperty({
    description: 'Choose your spirit animal',
    example: 'Panda',
  })
  readonly avatar: string;

  @ApiProperty({
    description: 'User Name',
    example: 'kushal',
  })
  readonly userName: string;
  @ApiProperty({
    description: 'Password',
    example: '######',
  })
  readonly password: string;
}
