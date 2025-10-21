import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { EmprestimoService } from './emprestimo.service';
import { EmprestimoDto } from './dto/emprestimo.dto';

@Controller('emprestimos')
export class EmprestimoController {
  constructor(private readonly emprestimoService: EmprestimoService) {}

  @Post()
  create(@Body() emprestimoDto: EmprestimoDto) {
    return this.emprestimoService.create(emprestimoDto);
  }

  @Get()
  findAll(@Query('usuario') idUsuario?: string, @Query('livro') idLivro?: string, @Query('ativos') ativos?: string) {
    if (idUsuario) {
      return this.emprestimoService.findByUsuario(+idUsuario);
    }
    if (idLivro) {
      return this.emprestimoService.findByLivro(+idLivro);
    }
    if (ativos === 'true') {
      return this.emprestimoService.findEmprestimosAtivos();
    }
    return this.emprestimoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emprestimoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() emprestimoDto: EmprestimoDto) {
    return this.emprestimoService.update(+id, emprestimoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emprestimoService.remove(+id);
  }
}
