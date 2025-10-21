import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorDto } from './dto/administrador.dto';

@Controller('administradores')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

  @Post()
  create(@Body() administradorDto: AdministradorDto) {
    return this.administradorService.create(administradorDto);
  }

  @Get()
  findAll() {
    return this.administradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administradorService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() administradorDto: AdministradorDto) {
    return this.administradorService.update(+id, administradorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administradorService.remove(+id);
  }
}
