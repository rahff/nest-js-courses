import { BadRequestException, Controller, Get, ParseIntPipe, Query } from "@nestjs/common";
import { LessonRepository } from "../dao/lessons.dao";
import { Lesson } from "../model/lesson.model";

@Controller("lessons")
export class LessonsController {

    constructor(private lessonRepository: LessonRepository){}

    @Get()
    async searchLesson(
        @Query("courseId") courseId: string, 
        @Query("sortOrder") sortOrder: string = "asc",  
        @Query("pageNumber", ParseIntPipe) pageNumber: number = 0,  
        @Query("pageSize", ParseIntPipe) pageSize: number = 3
    ): Promise<Lesson[]> {

        if(!courseId) throw new BadRequestException("CouseId must be defined");
        if(sortOrder !== "asc" && sortOrder !== "desc") throw new BadRequestException("Invalid sorted order parameter");
        const lessons = await this.lessonRepository.search(courseId, sortOrder, pageNumber, pageSize);
        console.log(lessons);
        return lessons;
    }
}