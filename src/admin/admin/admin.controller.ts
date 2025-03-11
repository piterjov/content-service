import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {
    @Get('test')
    getAdminTest() {
        return { message: 'Admin endpoint working!' };
    }
}
