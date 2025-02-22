import { PartialType } from '@nestjs/mapped-types';
import { CreateHaceDto } from './create-hace.dto';

export class UpdateHaceDto extends PartialType(CreateHaceDto) {}
