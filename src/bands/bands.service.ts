import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBandDto } from './dto/create-band.dto';
import { UpdateBandDto } from './dto/update-band.dto';

@Injectable()
export class BandsService {
  constructor(private dbService:PrismaService){}

  async create(createBandDto: CreateBandDto) {
    await this.dbService.band.create({data:createBandDto})
  }

  async findAll() {
    return await this.dbService.band.findMany({
      include:{
        albums:{
          include : {
            genre:true
          }
        }
      }
    })
  }

  async findOne(id: number) {
    return await this.dbService.band.findUnique({
      where:{
        id:id
      }
    });
  }

  update(id: number, updateBandDto: UpdateBandDto) {
    return `This action updates a #${id} band`;
  }

  async remove(id: number) {
    return await this.dbService.band.delete({
      where:{
        id:id
      }
  })
  }
}

