import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import User from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}
  @Post()
  createUser(@Body() user: CreateUserDto): User {
    return this.service.createUser(user);
  }
  @Get()
  getUsers(): Array<User> {
    return this.service.getUsers();
  }
  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.service.getUser(id);
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto): User {
    return this.service.updateUser(id, user);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    return this.service.deleteUser(id);
  }
}
