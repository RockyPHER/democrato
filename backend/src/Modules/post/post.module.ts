import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [PostController],
    providers: [PostService],
    exports: [PostModule],
})
export class PostModule { }
