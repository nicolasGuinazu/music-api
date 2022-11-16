import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
  constructor(private dbService: PrismaService) {}

  async create(createGenreDto: CreateGenreDto) {
    return this.dbService.genre.create({
      data: createGenreDto,
    });
  }

  async findAll() {
    return this.dbService.genre.findMany();
  }

  async findOne(id: number) {
    return await this.dbService.band.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return this.dbService.genre.update({
      where: {
        id: id,
      },
      data: updateGenreDto,
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
