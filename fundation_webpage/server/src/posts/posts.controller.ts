import { Controller, Post as HttpPost, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { SuccessResponseDto } from 'src/common/dto/response.dto';

@Controller('posts')
@UseGuards(JwtAuthGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @HttpPost()
  async create(@Body() createPostDto: CreatePostDto) {
    const post = await this.postsService.create(createPostDto);
    if (!post) {
      throw new Error('Error creando el post ');
    }
    return new SuccessResponseDto('Post creado exitosamente', post);

  }

  @Get()
  async findAll() {
    const list = await this.postsService.findAll();
    if (!list || list.length === 0) {
      throw new Error('No se encontraron posts');
    }
    return new SuccessResponseDto('Posts encontrados', list);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = this.postsService.findOne(id);
    if (!post) {
      throw new Error('Post no encontrado');
    }
    return new SuccessResponseDto('Post encontrado', post);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const post = this.postsService.update(id, updatePostDto);
    if (!post) {
      throw new Error('Error actualizando el post');
    }
    return new SuccessResponseDto('Post actualizado exitosamente', post);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const post = this.postsService.findOne(id);
    if (!post) {
      throw new Error('Post no encontrado');
    }
    const deletion = await this.postsService.remove(id);
    if (!deletion) {
      throw new Error('Error eliminando el post');
    }
    return new SuccessResponseDto('Post eliminado exitosamente', deletion);
  }
}