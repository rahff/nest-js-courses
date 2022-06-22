import { BadRequestException, Injectable, UseFilters } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { HttpExceptionFilter } from "src/http/http.filters";
import { Course, CourseDocument, CourseDto } from "../model/course.model";


@Injectable()
export class CoursesRepository {
    

    constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>){}

    async findAll(): Promise<Course[]>{
       return this.courseModel.find({}).exec();
    }

    async createOne(body: Partial<Course>): Promise<Course> {
        const newCourse = new this.courseModel(body);
        await newCourse.save();
        return newCourse.toObject({versionKey: false});
    }

    async updateOne(id: string, body: Partial<CourseDto>): Promise<Course> {
        return this.courseModel.findByIdAndUpdate(id, {...body}, {new: true}).exec();
    }

    async deleteOne(courseId: string): Promise<Course> {
        return this.courseModel.findByIdAndDelete(courseId).exec();
    }

    async getOneByName(name: string): Promise<Course> {
        return this.courseModel.findOne({url: name}).exec();
    }
}