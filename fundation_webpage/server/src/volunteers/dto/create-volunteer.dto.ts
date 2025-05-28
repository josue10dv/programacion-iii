import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateVolunteerDto {
    @IsNotEmpty()
    fullName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(10)
    phoneNumber: string;
}