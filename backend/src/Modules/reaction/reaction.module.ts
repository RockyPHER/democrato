import { Module } from '@nestjs/common';
import { ReactionController } from './reaction.controller';
import { ReactionService } from './reaction.service';

@Module({
    controllers: [ReactionController],
    providers: [ReactionService],
    exports: [ReactionModule]
})
export class ReactionModule { }
