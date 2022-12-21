import { ApiProperty } from '@nestjs/swagger';

export class activityDto {
  @ApiProperty({
    description: 'Activity',
    example: 'intro_anxiety',
  })
  readonly activityId: string;
}
