import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrador } from './entities/administrador.entity';
import { AdministradorDto } from './dto/administrador.dto';

@Injectable()
export class AdministradorService {
  constructor(
    @InjectRepository(Administrador)
    private administradorRepository: Repository<Administrador>,
  ) {}

  create(administradorDto: AdministradorDto) {
    const administrador = this.administradorRepository.create(administradorDto);
    return this.administradorRepository.save(administrador);
  }

  findAll() {
    return this.administradorRepository.find();
  }

  findOne(id: number) {
    return this.administradorRepository.findOne({ where: { idAdministrador: id } });
  }

  async update(id: number, administradorDto: AdministradorDto) {
    await this.administradorRepository.update(id, administradorDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.administradorRepository.delete(id);
  }
}
