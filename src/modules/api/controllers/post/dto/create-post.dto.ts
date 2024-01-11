import { CreatePostDto as ICreatePostDto } from "@lib/post/application-servicess/commands/dto";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreatePostDto implements ICreatePostDto {
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    message: string;

    @IsUUID()
    authorId: string;
}