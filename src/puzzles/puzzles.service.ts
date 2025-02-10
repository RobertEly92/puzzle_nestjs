import { Get, Injectable, Param } from '@nestjs/common';
import { CreatePuzzleDto } from './dto/create-puzzle.dto';
import { Puzzle } from './schemas/puzzle.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class PuzzlesService {
    constructor(@InjectModel(Puzzle.name) private puzzleModel: Model<Puzzle>) {}

   async create(createPuzzleDto: CreatePuzzleDto) {
        const createdPuzzle = new this.puzzleModel(createPuzzleDto);
        return createdPuzzle.save();
    }

    async findAll(): Promise <Puzzle[]> {
        return this.puzzleModel.find().exec();
    }
}
