export class AutorDto {
  idAutor: number;
  nome: string;
  email?: string;
  dataNascimento?: Date;
  dataFalecimento?: Date;
  nacionalidade?: string;
  biografia?: string;
  ativo: boolean;
}
