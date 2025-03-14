import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import {ContentRepository} from "../../content/content.repository";

@Injectable()
export class ContentService {
    constructor(private readonly contentRepository: ContentRepository) {}

    async getAllContent(page = 1, limit = 10): Promise<any> {
       return this.contentRepository.findAll()
    }

}
