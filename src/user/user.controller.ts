import { SignupDto } from './dtos/signupDto';
import { loginDto } from './dtos/loginDto';
import { Controller, Get, Render, Post, Body, Redirect, UseInterceptors, ClassSerializerInterceptor, Session } from '@nestjs/common';
import { UserService } from './user.service';
import session from 'express-session';

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}
    @Get("/signup")
    @Render("user/signup")
    getSignup() {}

    @Get("/login")
    @Render("user/login")
    getLogin(){}

    @Post("/signup")
    @Redirect('/user/login')
   async postSignup(@Body() body: SignupDto){
       return {message : await this.userService.postSignup(body)} 
    }
    
    @UseInterceptors(ClassSerializerInterceptor)
    @Post("/login")
   async postLogin(@Body() body: loginDto, @Session() session : Record<string, any>) {
    const user = await this.userService.postLogin(body)
     session.user = user;
     session.connected = true;
     return session;
   }
}
