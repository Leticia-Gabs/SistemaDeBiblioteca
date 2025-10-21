import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Administrador {
  @PrimaryGeneratedColumn()
  idAdministrador: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 20, unique: true })
  cpf: string;

  @Column({ length: 20 })
  telefone: string;

  @Column({ length: 200 })
  endereco: string;

  @Column({ type: 'date' })
  dataNascimento: Date;

  @Column({ length: 50 })
  cargo: string;

  @Column({ type: 'date' })
  dataAdmissao: Date;

  @Column({ default: true })
  ativo: boolean;
}
