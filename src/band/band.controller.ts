import { Controller,Get } from '@nestjs/common';
import { BandService } from './band.service';

@Controller('band')
export class BandController {
    constructor(private bandService:BandService){}

    @Get()
    async bands(){
        return await this.bandService.findAll()
    }
}
