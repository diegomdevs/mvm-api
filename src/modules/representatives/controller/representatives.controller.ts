import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateRepresentativeDto,
  UpdateRepresentativeDto,
} from '../dto/representative.dto';
import Representative from '../entities/repesentive.entity';
import { RepresentativesService } from '../service/representatives.service';

@Controller('representatives')
export class RepresentativesController {
  constructor(private readonly service: RepresentativesService) {}

  @Get()
  getRepresentatives(): Array<Representative> {
    return this.service.getRepresentatives();
  }
  @Post()
  createRepresentative(
    @Body() representative: CreateRepresentativeDto,
  ): Representative {
    return this.service.createRepresentative(representative);
  }
  @Get(':id')
  getRepresentative(id: string): Representative {
    return this.service.getRepresentative(id);
  }
  @Put(':id')
  updateRepresentative(
    @Param('id') id: string,
    @Body() representative: UpdateRepresentativeDto,
  ): Representative {
    return this.service.updateRepresentative(id, representative);
  }
  @Delete(':id')
  deleteRepresentative(@Param('id') id: string): string {
    return this.service.deleteRepresentative(id);
  }
}
