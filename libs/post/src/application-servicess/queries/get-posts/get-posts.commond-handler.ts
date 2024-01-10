import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetPostsQuery } from "./get-posts.commond";
import { PostAggregate } from "@lib/post/domain";
import { Logger } from "@nestjs/common";
import { PostRepository } from "@lib/post/providers";

@QueryHandler(GetPostsQuery)
export class GetPostsQueryHandler implements IQueryHandler<GetPostsQuery, [PostAggregate[], number]>{
    private readonly logger = new Logger(GetPostsQueryHandler.name);

    constructor(private readonly postRepository: PostRepository){}

    async execute(query: GetPostsQuery): Promise<[[PostAggregate], number]> {
        const [data, count] = await this.postRepository
        .findAll()
        .catch(err => {
            this.logger.error(err);

            return [[], 0]
        });

        return [data, count] as [[PostAggregate], number]
    }
}