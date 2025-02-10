import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { HydratedDocument,  } from "mongoose";

export type PuzzleDocument = HydratedDocument<Puzzle>;

@Schema()
export class Puzzle {
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    pieces: number;
}

export const PuzzleSchema = SchemaFactory.createForClass(Puzzle);

