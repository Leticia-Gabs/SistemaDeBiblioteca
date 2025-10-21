import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  idAutor: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100, nullable: true })
  email: string;

  @Column({ type: 'date', nullable: true })
  dataNascimento: Date;

  @Column({ type: 'date', nullable: true })
  dataFalecimento: Date;

  @Column({ length: 100, nullable: true })
  nacionalidade: string;

  @Column({ type: 'text', nullable: true })
  biografia: string;

  @Column({ default: true })
  ativo: boolean;
}
