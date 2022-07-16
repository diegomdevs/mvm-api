import { Module } from '@nestjs/common';
import { CreateClientDto } from 'src/dto/client.dto';
import Client from 'src/entities/client.entity';
import { ParentsController } from '../controller/parents.controller';
import { ParentsService } from '../service/parents.service';

@Module({
  imports: [Client, CreateClientDto],
  controllers: [ParentsController],
  providers: [ParentsService],
})
export class ParentsModule {}
