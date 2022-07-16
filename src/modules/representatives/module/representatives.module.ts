import { Module } from '@nestjs/common';
import { CreateAdultDto } from 'src/dto/adult.dto';
import Adult from 'src/entities/adult.entity';
import { RepresentativesController } from '../controller/representatives.controller';
import { RepresentativesService } from '../service/representatives.service';

@Module({
  imports: [Adult, CreateAdultDto],
  controllers: [RepresentativesController],
  providers: [RepresentativesService],
})
export class RepresentativesModule {}
