import { ApiProperty } from "@nestjs/swagger";
import { Reaction } from "../reaction/reaction.interface";

export interface PostDTO {
    id: number;
    content: string;
    reactions: Reaction[];
    createdAt: Date;
    updatedAt: Date;
}

export class CreatePostDTO {
    @ApiProperty()
    content: string;
}
