import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorDto } from './dto/autor.dto';

@Controller('autores')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  @Post()
  create(@Body() autorDto: AutorDto) {
    return this.autorService.create(autorDto);
  }

  @Get()
  findAll() {
    return this.autorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() autorDto: AutorDto) {
    return this.autorService.update(+id, autorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorService.remove(+id);
  }
}
