import { Body, Controller, Get, Post } from '@nestjs/common';
import { PuzzlesService } from './puzzles.service';
import { CreatePuzzleDto } from './dto/create-puzzle.dto';
import { Puzzle } from './schemas/puzzle.schema';
import { log } from 'console';

@Controller('puzzles')
export class PuzzlesController {
    constructor(private readonly puzzlesService: PuzzlesService) { }

    @Post()
    async create(@Body() createPuzzleDto: CreatePuzzleDto) {
        await this.puzzlesService.create(createPuzzleDto);
    }

    @Get()
    findAll(): Promise<Puzzle[]> {
        return this.puzzlesService.findAll();
    }


}
