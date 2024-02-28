import { Injectable } from '@nestjs/common';
import { SignupDto } from './dtos/signupDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,) {}

 async postSignup(body: SignupDto) : Promise<string> {
    try {
        const user = this.usersRepository.create({...body })
        await this.usersRepository.save(user)
        return "User created!"
    } catch (error) {
        
    }
    
  }
}
