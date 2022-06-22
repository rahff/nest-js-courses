import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';
import { Course } from "./course.model";

export type LessonDocument = Lesson & Document;

@Schema()
export class Lesson {

    @Prop()
    _id: string;
    @Prop({required: false})
    seqNo: Number;

    @Prop({required: true})
    description: String;

    @Prop({required: true})
    duration: String;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Course"})
    course: Course;
}


export class LessonDto {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    course: string;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);