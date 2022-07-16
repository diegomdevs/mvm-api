import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ParentsService } from '../service/parents.service';
import Parent from '../entities/parent.entity';
import { CreateParentDto, UpdateParentDto } from '../dto/parent.dto';
@Controller('parents')
export class ParentsController {
  constructor(private readonly service: ParentsService) {}
  @Get()
  public getParents(): Array<Parent> {
    return this.service.getParents();
  }
  @Post()
  public createParent(@Body() parent: CreateParentDto): Parent {
    return this.service.createParent(parent);
  }
  @Get(':id')
  public getParent(@Param('id') id: string): Parent {
    return this.service.getParent(id);
  }
  @Put(':id')
  public updateParent(
    @Param('id') id: string,
    @Body() parent: UpdateParentDto,
  ): Parent {
    return this.service.updateParent(id, parent);
  }
  @Delete(':id')
  public deleteParent(@Param('id') id: string): string {
    return this.service.deleteParent(id);
  }
}
