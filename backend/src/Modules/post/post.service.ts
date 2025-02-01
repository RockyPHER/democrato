import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreatePostDTO } from "./post.dto";

@Injectable()
export class PostService {
    constructor(private readonly prismaService: PrismaService) { }
    async list() {
        return this.prismaService.post.findMany({
            orderBy: { createdAt: "desc" },
        });
    }

    async get(id: number) {
        return this.prismaService.post.findUnique({ where: { id } });
    }

    async create(data: CreatePostDTO) {
        return this.prismaService.post.create({ data });
    }
}