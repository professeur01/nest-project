import { SignupDto } from './dtos/signupDto';
import { Controller, Get, Render, Post, Body, Redirect } from '@nestjs/common';
import { UserService } from './user.service';

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
    
    @Post("/login")
   async postLogin(@Body() body: any){
    return {message : await this.userService.postSignup(body)}
   }
}
