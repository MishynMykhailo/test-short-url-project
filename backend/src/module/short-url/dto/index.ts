import { IsString } from 'class-validator';

export class createOriginalUrlDTO {
  @IsString()
  originalUrl: string;
}
