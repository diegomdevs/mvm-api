import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/module/users.module';
import Person from './entities/person.entity';
import { CreatePersonDto, UpdatePersonDto } from './dto/person.dto';
@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, Person, CreatePersonDto, UpdatePersonDto],
  exports: [Person, CreatePersonDto, UpdatePersonDto],
})
export class AppModule {}
