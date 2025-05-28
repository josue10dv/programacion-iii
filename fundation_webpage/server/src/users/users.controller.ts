import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, BadRequestException, UploadedFile, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Users } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const user = await this.usersService.create(createUserDto);
        return new SuccessResponseDto('User created', user);
    }

    @Get()
    findAll(
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ): Promise<Pagination<Users>> {
        limit = limit > 100 ? 100 : limit;
        return this.usersService.findAll({ page, limit });
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const user = await this.usersService.findOne(id);
        return new SuccessResponseDto('User retrieved', user);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        const user = this.usersService.update(id, updateUserDto);
        return new SuccessResponseDto('User updated', user);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        const user = this.usersService.remove(id);
        return new SuccessResponseDto('User deleted', user);
    }

    @Put(':id/profile')
    @UseInterceptors(FileInterceptor('profile', {
        storage: diskStorage({
            destination: './public/profile',
            filename: (req, file, cb) => {
                const uniqueName = `${Date.now()}-${file.originalname}`;
                cb(null, uniqueName);
            }
        }),
        fileFilter: (req, file, cb) => {
            if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
                return cb(new BadRequestException('Only JPG or PNG files are allowed'), false);
            }
            cb(null, true);
        }
    }))
    async uploadProfile(
        @Param('id') id: string,
        @UploadedFile() file: Express.Multer.File,
    ) {
        if (!file) throw new BadRequestException('Profile image is required');
        const user = await this.usersService.updateProfile(id, file.filename);
        return new SuccessResponseDto('Profile image updated', user);
    }
}