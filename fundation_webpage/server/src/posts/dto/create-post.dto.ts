import { IsDate, IsString, IsUUID } from 'class-validator';

export class CreatePostDto {
  @IsUUID()
  id: string;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsDate()
  date: Date;
}