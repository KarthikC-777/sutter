import { ApiProperty } from '@nestjs/swagger';

export class surveydto {
  @ApiProperty({
    description: 'Intereset Level',
    example: 'intrest 1',
  })
  readonly interestLevel: string;

  @ApiProperty({
    description: 'Drawing',
    example: 'https://ca.slack-edge.com/T02SWD7DY-U01GJSUMXKJ-7f7b51f7350c-512',
  })
  readonly drawing: string;

  @ApiProperty({
    description: 'Trace and track mood',
    example: 'mood 1',
  })
  readonly moodTrack: string;
}
