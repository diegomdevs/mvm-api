import { Module } from '@nestjs/common';
import Person from 'src/entities/person.entity';
import { UsersController } from '../controller/users.controller';
import { UsersService } from '../service/users.service';
import { CreatePersonDto, UpdatePersonDto } from 'src/dto/person.dto';
@Module({
  imports: [Person, CreatePersonDto, UpdatePersonDto],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
