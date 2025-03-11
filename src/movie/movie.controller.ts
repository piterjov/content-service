import { Controller, Get } from '@nestjs/common';

@Controller('public')
export class PublicController {
    @Get('dummy')
    getDummy(): string {
        return 'This is a dummy public endpoint.';
    }
}
