import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService} from "../prisma/prisma.service";
import { IRepository} from "../common/interfaces/repository.interface";

@Injectable()
export class ContentRepository implements IRepository<any> {
    constructor(private readonly prisma: PrismaService) {}

    async findAll(): Promise<any[]> {
        return this.prisma.content.findMany();
    }

    async findById(id: number): Promise<any> {
        const content = await this.prisma.content.findUnique({ where: { id } });
        if (!content) throw new NotFoundException(`Content with ID ${id} not found`);
        return content;
    }

    async create(data: any): Promise<any> {
        return this.prisma.content.create({ data });
    }

    async update(id: number, data: any): Promise<any> {
        return this.prisma.content.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.content.delete({ where: { id } });
    }
}
