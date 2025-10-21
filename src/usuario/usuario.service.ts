import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioDto } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  create(usuarioDto: UsuarioDto) {
    const usuario = this.usuarioRepository.create(usuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(id: number) {
    return this.usuarioRepository.findOne({ where: { idUsuario: id } });
  }

  async update(id: number, usuarioDto: UsuarioDto) {
    await this.usuarioRepository.update(id, usuarioDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.usuarioRepository.delete(id);
  }
}
