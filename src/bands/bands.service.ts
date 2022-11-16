import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBandDto } from './dto/create-band.dto';
import { UpdateBandDto } from './dto/update-band.dto';

@Injectable()
export class BandsService {
  constructor(private dbService: PrismaService) {}

  async create(createBandDto: CreateBandDto) {
    return await this.dbService.band.create({ data: createBandDto });
  }

  async findAll() {
    return await this.dbService.band.findMany({
      include: {
        albums: {
          include: {
            genre: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.dbService.band.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateBandDto: UpdateBandDto) {
    console.log(
      '🔴 ~ file: bands.service.ts ~ line 35 ~ BandsService ~ update ~ updateBandDto',
      updateBandDto,
    );

    return this.dbService.band.update({
      where: {
        id: id,
      },
      data: updateBandDto,
    });
  }

  async remove(id: number) {
    return await this.dbService.band.delete({
      where: {
        id: id,
      },
    });
  }
}
