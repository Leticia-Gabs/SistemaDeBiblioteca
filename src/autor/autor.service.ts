import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autor } from './entities/autor.entity';
import { AutorDto } from './dto/autor.dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private autorRepository: Repository<Autor>,
  ) {}

  create(autorDto: AutorDto) {
    const autor = this.autorRepository.create(autorDto);
    return this.autorRepository.save(autor);
  }

  findAll() {
    return this.autorRepository.find();
  }

  findOne(id: number) {
    return this.autorRepository.findOne({ where: { idAutor: id } });
  }

  async update(id: number, autorDto: AutorDto) {
    await this.autorRepository.update(id, autorDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.autorRepository.delete(id);
  }
}
