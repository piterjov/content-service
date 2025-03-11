import { Controller, Get } from '@nestjs/common';

@Controller('front')
export class FrontController {
    @Get('test')
    getFrontTest() {
        return { message: 'Front endpoint working!' };
    }
}
