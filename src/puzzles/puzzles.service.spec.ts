import { Test, TestingModule } from '@nestjs/testing';
import { PuzzlesService } from './puzzles.service';
import { Puzzle, PuzzleDocument } from './schemas/puzzle.schema';
import { getModelToken } from '@nestjs/mongoose/dist';
import { Model, Query } from 'mongoose';
import { title } from 'process';

const mockPuzzle = (
  id = 1,
  title = 'schöner title',
  pieces = 1000
): Puzzle => ({
  id,
  title,
  pieces
});

const mockPuzzleDocument = (mock?: Partial<Puzzle>): Partial<PuzzleDocument> => ({
  title: mock?.title || 'Titel',
  id: mock?.id || 2,
  pieces: mock?.pieces || 1500,
});


describe('PuzzlesService', () => {
  let service: PuzzlesService;
  let model: Model<Puzzle>;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuzzlesService, {
        provide: getModelToken('Puzzle'),
        useValue: {
          create: jest.fn(),
          find: jest.fn()
        }
      }],
    }).compile();

    service = module.get<PuzzlesService>(PuzzlesService);
    model = module.get<Model<Puzzle>>(getModelToken('Puzzle'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return array of puzzles', async () => {
    jest.spyOn(model, 'find').mockReturnValue({ 
      exec: jest.fn().mockResolvedValueOnce([mockPuzzle()]) 
    } as unknown as Query<PuzzleDocument[], PuzzleDocument>);
      
    const puzzles = await service.findAll();
    expect(puzzles).toEqual([mockPuzzle()]);
  });
//TODO Test der Mongoose Funktion besser verstehen 
 /* it('should create a puzzle', async () => {
    jest.spyOn(model, 'create').mockResolvedValueOnce(mockPuzzleDocument());
    const puzzles = await service.findAll();
    expect(puzzles).toEqual([mockPuzzle()]);
  });
*/
});
