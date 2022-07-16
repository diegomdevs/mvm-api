import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/module/users.module';
import Person from './entities/person.entity';
import Client from './entities/client.entity';
import Adult from './entities/adult.entity';
import { CreatePersonDto } from './dto/person.dto';
import { StudentsModule } from './modules/students/module/students.module';
import { CreateClientDto } from './dto/client.dto';
import { ParentsModule } from './modules/parents/module/parents.module';
import { CreateAdultDto } from './dto/adult.dto';
@Module({
  imports: [UsersModule, StudentsModule, ParentsModule],
  controllers: [AppController],
  providers: [
    AppService,
    Person,
    Client,
    Adult,
    CreatePersonDto,
    CreateClientDto,
    CreateAdultDto,
  ],
  exports: [Person, Client, CreatePersonDto, CreateClientDto, CreateAdultDto],
})
export class AppModule {}
