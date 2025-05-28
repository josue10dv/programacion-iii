import { IsString, IsNotEmpty, IsDateString, IsArray, ArrayNotEmpty, IsUUID } from 'class-validator';

export class CreateEventDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    ubication: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsDateString()
    startDate: Date;

    @IsDateString()
    endDate: Date;

    @IsArray()
    @ArrayNotEmpty()
    @IsUUID('all', { each: true })
    volunteers: string[];
}