import { IsString, IsOptional, IsDateString, IsArray, ArrayNotEmpty, IsUUID } from 'class-validator';

export class UpdateEventDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    ubication?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsDateString()
    startDate?: Date;

    @IsOptional()
    @IsDateString()
    endDate?: Date;

    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @IsUUID('all', { each: true })
    volunteers?: string[];
}