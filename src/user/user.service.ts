import { loginDto } from './dtos/loginDto';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { SignupDto } from './dtos/signupDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,) {}

 async postSignup(body: SignupDto) : Promise<string> {
    try {
      const {password} = body;
      const hash = await bcrypt.hash(password, 10);
        const user = this.usersRepository.create({...body, password : hash })
        await this.usersRepository.save(user)
        return "User created!"
    } catch (error) {
        throw new ConflictException(error.message);
        
    }
  }
 async postLogin(body : loginDto){
      const {email , password} = body;
      const user = await this.usersRepository.findOne({where : {email : email}});
      if(!user) throw new NotFoundException("Email not found");
  }
}
