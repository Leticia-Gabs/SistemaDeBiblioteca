import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livro } from './entities/livro.entity';
import { LivroDto } from './dto/livro.dto';

@Injectable()
export class LivroService {
  constructor(
    @InjectRepository(Livro)
    private livroRepository: Repository<Livro>,
  ) {}

  create(livroDto: LivroDto) {
    const livro = this.livroRepository.create(livroDto);
    return this.livroRepository.save(livro);
  }

  findAll() {
    return this.livroRepository.find();
  }

  findOne(id: number) {
    return this.livroRepository.findOne({ where: { idLivro: id } });
  }

  async update(id: number, livroDto: LivroDto) {
    await this.livroRepository.update(id, livroDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.livroRepository.delete(id);
  }
}
