import { Controller, Post } from '@nestjs/common';
import { User } from '../model/user.model';

@Controller()
export class AuthController {

    @Post('login')
    login(email: string, password: string){
        
    }
}
