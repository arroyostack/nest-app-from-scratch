// npx ts-node-dev src/main.ts
import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
    @Get()
    getrootRoute() {
        return 'Test in Nest.js app';
    }
}

@Module( {
    controllers: [AppController]
} )
class AppModule { }


async function bootstrap() {
    const app = await NestFactory.create( AppModule );

    await app.listen( 3000 );
}

bootstrap();