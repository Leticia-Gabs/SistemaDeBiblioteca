import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Emprestimo } from './entities/emprestimo.entity';
import { EmprestimoDto } from './dto/emprestimo.dto';

@Injectable()
export class EmprestimoService {
  constructor(
    @InjectRepository(Emprestimo)
    private emprestimoRepository: Repository<Emprestimo>,
  ) {}

  create(emprestimoDto: EmprestimoDto) {
    const emprestimo = this.emprestimoRepository.create(emprestimoDto);
    return this.emprestimoRepository.save(emprestimo);
  }

  findAll() {
    return this.emprestimoRepository.find({
      relations: ['usuario', 'livro']
    });
  }

  findOne(id: number) {
    return this.emprestimoRepository.findOne({ 
      where: { idEmprestimo: id },
      relations: ['usuario', 'livro']
    });
  }

  async update(id: number, emprestimoDto: EmprestimoDto) {
    await this.emprestimoRepository.update(id, emprestimoDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.emprestimoRepository.delete(id);
  }

  // Métodos específicos para empréstimos
  findByUsuario(idUsuario: number) {
    return this.emprestimoRepository.find({
      where: { idUsuario },
      relations: ['usuario', 'livro']
    });
  }

  findByLivro(idLivro: number) {
    return this.emprestimoRepository.find({
      where: { idLivro },
      relations: ['usuario', 'livro']
    });
  }

  findEmprestimosAtivos() {
    return this.emprestimoRepository.find({
      where: { devolvido: false },
      relations: ['usuario', 'livro']
    });
  }
}
