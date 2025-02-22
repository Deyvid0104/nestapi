import { PartialType } from '@nestjs/mapped-types';
import { CreateDiseñaDto } from './create-diseña.dto';

export class UpdateDiseñaDto extends PartialType(CreateDiseñaDto) {}
