import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getrootRoute() {
        return 'Test in Nest.js app';
    }

    @Get( '/ping' )
    getPinPong() {
        return 'Pong!!!';
    }
}