import { Test, TestingModule } from '@nestjs/testing';
import { LivroController } from './livro.controller';
import { LivroService } from './livro.service';
import { LivroDto } from './dto/livro.dto';

describe('LivroController', () => {
  let controller: LivroController;
  let service: LivroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivroController],
      providers: [
        {
          provide: LivroService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<LivroController>(LivroController);
    service = module.get<LivroService>(LivroService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call livroService.create with correct params', async () => {
      const dto: LivroDto = {
        idLivro: 'L001',
        autor: 'Machado de Assis',
        anoPublicacao: '1899',
        titulo: 'Dom Casmurro',
      };
      await controller.create(dto);
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should call livroService.findAll', async () => {
      await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should call livroService.findOne with correct id', async () => {
      const id = 'L001';
      await controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should call livroService.update with correct params', async () => {
      const id = 'L001';
      const dto: LivroDto = {
        idLivro: id,
        autor: 'Machado de Assis',
        anoPublicacao: '1900',
        titulo: 'Dom Casmurro (Atualizado)',
      };
      await controller.update(id, dto);
      expect(service.update).toHaveBeenCalledWith(id, dto);
    });
  });

  describe('remove', () => {
    it('should call livroService.remove with correct id', async () => {
      const id = 'L001';
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(id);
    });
  });
});
