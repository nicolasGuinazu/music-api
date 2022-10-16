import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BandsModule } from './bands/bands.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [PrismaModule, BandsModule, GenresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
