import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Livro {
  @PrimaryColumn({ length: 10 })
  idLivro: string;

  @Column({ length: 100 })
  autor: string;

  @Column("year")
  anoPublicacao: string;

  @Column({ length: 200 })
  titulo: string;
}
