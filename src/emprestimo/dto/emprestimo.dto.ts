export class EmprestimoDto {
  idEmprestimo: number;
  idUsuario: number;
  idLivro: number;
  dataEmprestimo: Date;
  dataDevolucaoPrevista: Date;
  dataDevolucaoReal?: Date;
  devolvido: boolean;
  multa?: number;
  observacoes?: string;
}
