import { Test, TestingModule } from '@nestjs/testing';
import { LivroService } from './Livro.service';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivroService],
    }).compile();

    service = module.get<UsuarioService>(LivroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
