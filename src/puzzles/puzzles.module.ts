import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PuzzlesService } from './puzzles.service';
import { PuzzlesController } from './puzzles.controller';
import { Puzzle, PuzzleSchema } from './schemas/puzzle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Puzzle.name, schema: PuzzleSchema}])
  ],
  providers: [PuzzlesService],
  controllers: [PuzzlesController]
})
export class PuzzlesModule {}
