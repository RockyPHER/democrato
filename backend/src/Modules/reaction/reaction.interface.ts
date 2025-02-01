import { ApiProperty } from "@nestjs/swagger";

export class Reaction {
    @ApiProperty()
    id: number;
    postId: number;
    value: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateReactionDTO { }

export interface EditReactionDTO { }

export interface GetReactionDTO { }

export interface DeleteReactionDTO { }