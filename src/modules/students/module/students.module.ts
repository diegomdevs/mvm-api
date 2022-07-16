import { Module } from '@nestjs/common';
import { CreateClientDto } from 'src/dto/client.dto';
import Client from 'src/entities/client.entity';
import { StudentsController } from '../controller/students.controller';
import { StudentsService } from '../service/students.service';

@Module({
  imports: [Client, CreateClientDto],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
