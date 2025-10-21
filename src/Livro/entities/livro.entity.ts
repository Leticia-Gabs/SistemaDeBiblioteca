import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  idLivro: number;

  @Column({ length: 100 })
  autor: string;

  @Column("year")
  anoPublicacao: string;

  @Column({ length: 200 })
  titulo: string;
}

