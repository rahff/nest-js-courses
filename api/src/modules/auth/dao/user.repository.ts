import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../model/user.model";

@Injectable()
export class UserRepository {

    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>){}

    findUserByEmail() {

    }
}