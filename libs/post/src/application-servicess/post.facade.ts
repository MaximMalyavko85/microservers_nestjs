import { Inject, Injectable } from "@nestjs/common";
import { CommandBus, EventBus, QueryBus } from "@nestjs/cqrs";
import { CreatePostDto, UpdatePostDto } from "./commands/dto";
import { CreatePostCommand, CreatePostCommandHandler, DeletePostCommand, SetPublishedCommand, UpdatePostCommand } from "./commands";
import { GetPostQuery, GetPostQueryHandler, GetPostsQuery, GetPostsQueryHandler } from "./queries";
import { PaginationDto } from "@lib/shared/dto";


@Injectable()
export class PostFacade{
    constructor(
        private readonly commanBus: CommandBus,
        private readonly queryBus: QueryBus,
        private readonly eventBus: EventBus,
    ){}

    commands = {
        createPost: (post: CreatePostDto) => this.createPost(post),
        updatePost: (post: UpdatePostDto) => this.updatePost(post),
        deletePost: (id : string) => this.deletePost(id),
        setPublishedPost: (id: string) => this.setPublishedPost(id),
    };

    queries = {
        getOnePost: (id: string) => this.getPost(id),
        getAllPosts: (pagination) => this.getPosts(pagination,)
    };  
    events = {};

    private createPost(post: CreatePostDto) {
        return this.commanBus.execute<
            CreatePostCommand,
            CreatePostCommandHandler['execute']
            >(new CreatePostCommand(post));
    }

    private updatePost(post: UpdatePostDto) {
        return this.commanBus.execute<
            UpdatePostCommand,
            CreatePostCommandHandler['execute']
            >(new UpdatePostCommand(post));
    }

    private setPublishedPost(id: string) {
        return this.commanBus.execute<
            SetPublishedCommand,
            CreatePostCommandHandler['execute']
            >(new SetPublishedCommand(id));
    }

    private deletePost(id : string) {
        return this.commanBus.execute<
            DeletePostCommand,
            CreatePostCommandHandler['execute']
            >(new DeletePostCommand(id));
    }

    private getPost(id: string) {
        return this.queryBus.execute<
        GetPostQuery,
        GetPostQueryHandler['execute']
        >(new GetPostQuery(id));
    }

    private getPosts(pagination: PaginationDto) {
        return this.queryBus.execute<
        GetPostsQuery,
        GetPostsQueryHandler['execute']
        >(new GetPostsQuery(pagination));
    }
}