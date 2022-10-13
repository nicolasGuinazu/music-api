import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BandModule } from './band/band.module';

@Module({
  imports: [PrismaModule, BandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
