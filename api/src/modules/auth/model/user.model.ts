import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop({required: false})
    email: String;

    @Prop({required: true})
    password: String;
}


export class UserDto {
    password: string;
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);