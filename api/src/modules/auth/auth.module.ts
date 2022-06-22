import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './controllers/auth.controller';
import { User, UserSchema } from './model/user.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name, schema: UserSchema
            }
        ])
    ],
    controllers: [AuthController]
})
export class AuthModule {}
