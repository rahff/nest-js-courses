import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema()
export class Course {

    @Prop({required: false})
    seqNo: Number;

    @Prop({required: true})
    url: String;

    @Prop({required: true})
    iconUrl: String;

    @Prop({required: false})
    courseListIcon: String;

    @Prop({required: false})
    longDescription: String;

    @Prop({required: true})
    category: String;

    @Prop({default: false})
    promo: Boolean;

    @Prop({required: true})
    description: String;

    @Prop({default: 0})
    lessonsCount: Number;
}


export class CourseDto {
    seqNo: number;
    url: string;
    iconUrl: string;
    courseListIcon: string;
    description: string;
    longDescription: string;
    category: string;
    lessonsCount: number;
    promo: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);