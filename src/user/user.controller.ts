import { Controller, Get, Render, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get("/signup")
    @Render("user/signup")
    getSignup() {}

    @Get("/login")
    @Render("user/login")
    getLogin(){}

    @Post("/signup")
    postSignup(@Body() body: any){
        return body
    }
}
