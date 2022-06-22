import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Lesson, LessonDocument } from "../model/lesson.model";

@Injectable()
export class LessonRepository {

    constructor(@InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>){}

    async search(courseId: string, sortOrder: string, pageNumber: number, pageSize: number): Promise<Lesson[]> {
        return this.lessonModel.find({course: courseId}, null, 
        {
            skip: pageNumber * pageSize,
            limit: pageSize,
            sort: { seqNo: sortOrder}
        }).exec()
    }
}