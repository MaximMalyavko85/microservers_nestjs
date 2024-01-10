import { CommandBus, EventBus, QueryBus } from "@nestjs/cqrs";
import { PostFacade } from "../application-servicess";

export const postFacadeFactory = (
    commandBus: CommandBus, 
    queryBus: QueryBus, 
    eventBus: EventBus 
) => new PostFacade(commandBus, queryBus, eventBus)