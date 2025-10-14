import { Injectable } from '@nestjs/common';
import { UsuarioDto } from '../dto/usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../entity/usuario.entity';

import { Repository } from 'typeorm';
@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuariosRpository: Repository<Usuario>,
    ) { }
    async create(usuarioData: UsuarioDto): Promise<Usuario> {
        const novoUsuario = this.usuariosRpository.create(usuarioData);
        return this.usuariosRpository.save(novoUsuario);
    }
}
