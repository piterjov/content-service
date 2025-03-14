import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { ContentController } from './content/content.controller';
import { ContentService } from './content/content.service';
import {ContentRepository} from "../content/content.repository";

@Module({
  controllers: [AdminController, ContentController],
  providers: [ContentService, ContentRepository]
})
export class AdminModule {}
