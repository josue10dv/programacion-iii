import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts } from './entities/post.entity';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Posts)
        private readonly postRepository: Repository<Posts>,
    ) { }

    async create(createPostDto: CreatePostDto) {

        const post = this.postRepository.create({
            title: createPostDto.title,
            content: createPostDto.content,
        });
        return this.postRepository.save(post);
    }

    findAll() {
        return this.postRepository.find({ relations: ['category'] });
    }

    findOne(id: string) {
        return this.postRepository.findOne({ where: { id }, relations: ['category'] });
    }

    async update(id: string, updatePostDto: UpdatePostDto) {
        const post = await this.postRepository.findOne({ where: { id }, relations: ['category'] });
        if (!post) throw new NotFoundException('Post no encontrado');

        Object.assign(post, updatePostDto);
        return this.postRepository.save(post);
    }

    async remove(id: string) {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) throw new NotFoundException('Post no encontrado');
        return this.postRepository.remove(post);
    }
}