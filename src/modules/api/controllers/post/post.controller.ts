import { PostFacade } from '@lib/post/application-servicess';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto';

@Controller('post')
export class PostController {
    constructor(private readonly postFacade: PostFacade){}

    @Post()
    createPost(@Body() createPostDto: CreatePostDto){
        this.postFacade.commands.createPost(createPostDto);
    }
}
