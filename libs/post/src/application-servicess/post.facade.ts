import { Inject, Injectable } from "@nestjs/common";
import { CommandBus, EventBus, QueryBus } from "@nestjs/cqrs";

@Injectable()
export class PostFacade{
    constructor(
        private readonly commanBus: CommandBus,
        private readonly queryBus: QueryBus,
        private readonly eventBus: EventBus,
    ){}

    commands = {};
    queries = {};
    events = {};
}