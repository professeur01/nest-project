import { Injectable } from '@nestjs/common';
import { SignupDto } from './dtos/signupDto';

@Injectable()
export class UserService {
    postSignup(body: SignupDto) {
        throw new Error("Method not inplemented");
        
    }
}

