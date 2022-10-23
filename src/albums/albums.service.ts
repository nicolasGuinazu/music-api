import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumsService {
  constructor(private dbService: PrismaService) {}

  create(createAlbumDto: CreateAlbumDto) {
    return this.dbService.album.create({ data: createAlbumDto });
  }

  findAll() {
    return this.dbService.album.findMany({
      include: {
        genre: true,
      },
    });
  }

  async findOne(id: number) {
    return this.dbService.album.findUnique({
      where:{
        id:id
      }
    })
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return `This action updates a #${id} album`;
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
