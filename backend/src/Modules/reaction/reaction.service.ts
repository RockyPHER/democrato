import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class ReactionService {
    constructor(private readonly prismaService: PrismaService) { }
    get() { return this.prismaService.reaction.findMany(); }
}