import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from '../dto/usuario.dto';


@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }
    @Post()
    create(@Body() usuarioData: UsuarioDto) {
        return this.usuarioService.create(usuarioData);
    }
}
