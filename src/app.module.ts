import { Module } from '@nestjs/common';

import { ScoutModule } from './scout/scout.module';

@Module({
  imports: [ScoutModule],
})
export class AppModule {}
