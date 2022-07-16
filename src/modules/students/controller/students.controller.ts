import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from '../dto/student.dto';
import Student from '../entities/student.entity';
import { StudentsService } from '../service/students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly service: StudentsService) {}
  @Post()
  createStudent(@Body() student: CreateStudentDto): Student {
    return this.service.createStudent(student);
  }
  @Get()
  getStudents(): Array<Student> {
    return this.service.getStudents();
  }
  @Get(':id')
  getStudent(@Param('id') id: string): Student {
    return this.service.getStudent(id);
  }
  @Put('id')
  updateStudent(
    @Param('id') id: string,
    @Body() student: UpdateStudentDto,
  ): Student {
    return this.service.updateStudent(id, student);
  }
  @Delete('id')
  deleteStudent(@Param('id') id: string): string {
    return this.service.deleteStudent(id);
  }
}
