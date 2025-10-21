import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Livro } from '../../Livro/entities/livro.entity';

@Entity()
export class Emprestimo {
  @PrimaryGeneratedColumn()
  idEmprestimo: number;

  @Column()
  idUsuario: number;

  @Column()
  idLivro: number;

  @Column({ type: 'date' })
  dataEmprestimo: Date;

  @Column({ type: 'date' })
  dataDevolucaoPrevista: Date;

  @Column({ type: 'date', nullable: true })
  dataDevolucaoReal: Date;

  @Column({ default: false })
  devolvido: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  multa: number;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @ManyToOne(() => Livro, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idLivro' })
  livro: Livro;
}
