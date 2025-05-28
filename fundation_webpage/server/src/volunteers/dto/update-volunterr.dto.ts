import { IsEmail, IsOptional, MinLength } from 'class-validator';

export class UpdateVolunteerDto {
    @IsOptional()
    fullName?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @MinLength(10)
    phoneNumber?: string;

    @IsOptional()
    active?: boolean;
}