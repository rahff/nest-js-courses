import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { CoursesRepository } from "../dao/courses.dao";
import { Course, CourseDto } from "../model/course.model";


@Controller('courses')
export class CourseController {

    constructor(private coursesRepository: CoursesRepository){}

    @Get()
    async findAllCourses(): Promise<Course[]> {
        return this.coursesRepository.findAll();
    }

    @Get("/:courseName")
    async findCourseByName(@Param("courseName") name: string): Promise<Course> {
        const course = await this.coursesRepository.getOneByName(name);
        if(!course) throw new NotFoundException("Course not found");
        return course;
    }

    @Put(':courseId')
    async updateCourse(@Param("courseId") courseId: string, @Body() changes: Partial<CourseDto>): Promise<Course> {
        return this.coursesRepository.updateOne(courseId, changes); 
    }

    @Post()
    async createCourse(@Body() body: Partial<CourseDto>): Promise<Course> {
        return this.coursesRepository.createOne(body);
    }

    @Delete('/:courseId')
    async deleteCourse(@Param('courseId') courseId: string): Promise<Course> {
        return this.coursesRepository.deleteOne(courseId);
    }

}