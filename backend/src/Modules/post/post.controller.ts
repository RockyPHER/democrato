import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDTO } from "./post.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Posts")
@Controller("posts")
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Get()
    async list() {
        return this.postService.list();
    }

    @Get(':id')
    async get(id: number) {
        return this.postService.get(id);
    }

    @Post()
    async create(@Body() body: CreatePostDTO) {
        return this.postService.create(body);
    }
}