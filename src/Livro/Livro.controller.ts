import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { LivroService } from './livro.service';
import { LivroDto } from './dto/livro.dto';

@Controller('livros')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @Post()
  create(@Body() livroDto: LivroDto) {
    return this.livroService.create(livroDto);
  }

  @Get()
  findAll() {
    return this.livroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livroService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() livroDto: LivroDto) {
    return this.livroService.update(id, livroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livroService.remove(id);
  }
}
