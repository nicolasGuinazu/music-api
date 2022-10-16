import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsController } from './bands.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BandsController],
  providers: [BandsService],
  imports: [PrismaModule ]
})
export class BandsModule {}
