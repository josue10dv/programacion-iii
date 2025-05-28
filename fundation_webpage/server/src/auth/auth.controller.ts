import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const login = await this.authService.login(loginDto);
        if (!login) {
            throw new Error('Credenciales inválidas');
        }
        return new SuccessResponseDto('Login exitoso', login);

    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        const user = await this.authService.register(createUserDto);
        if (!user) {
            throw new Error('Registro fallido: usuario ya existe');
        }
        return new SuccessResponseDto('Usuario creado exitosamente', user);
    }
}