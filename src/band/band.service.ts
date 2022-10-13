import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BandService {
    constructor(private dbService:PrismaService){}

    async findAll(){
        return await this.dbService.band.findMany()
    }
}
