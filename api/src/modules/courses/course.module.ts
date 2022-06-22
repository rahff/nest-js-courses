import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CourseController } from "./controllers/courses.controller";
import { LessonsController } from "./controllers/lesson.controller";
import { CoursesRepository } from "./dao/courses.dao";
import { LessonRepository } from "./dao/lessons.dao";
import { Course, CourseSchema } from "./model/course.model";
import { Lesson, LessonSchema } from "./model/lesson.model";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Course.name, schema: CourseSchema
            },
            {
                name: Lesson.name, schema: LessonSchema
            }
        ])
    ],
    controllers: [CourseController, LessonsController],
    providers: [CoursesRepository, LessonRepository]
})
export class CourseModule {

}