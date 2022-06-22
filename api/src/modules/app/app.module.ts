import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../../../environment/environment.dev';
import { AuthModule } from '../auth/auth.module';
import { CourseModule } from '../courses/course.module';

@Module({
  imports: [
    CourseModule,
    AuthModule,
    MongooseModule.forRoot(environment.getEnv().mongoUri)
  ]
})
export class AppModule {}

