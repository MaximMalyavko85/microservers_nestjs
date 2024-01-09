import { BadRequestException, ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import * as bcrypt from "bcrypt";
import { UserEvent } from 'src/common/events/user.events';
//import { AppError } from 'src/common/constants/errors';
//import { CreateUserDTO, UserLoginDTO } from '../users/dto';
//import { UsersService } from '../users/users.service';
//import { TokenService } from '../token/token.service';
import { IAuthUserWithTokens, IUser} from 'src/common/interfaces/users';


@Injectable()
export class AuthService {
    constructor(
        //private readonly userService: UsersService,
        //private readonly tokenSerice: TokenService,
        @Inject('MS_USERS_SERVICES') private readonly msUserServiceClient: ClientProxy
        ) {}

    // register
    async signUp(dto: any): Promise<any>{
        // const existUser = await this.userService.findUserByEmail(dto.email);
        // if (existUser) throw new BadRequestException(AppError.USER_EXIST); //400

        // const newUser = await this.userService.create(dto);
        // const tokens = await this.tokenSerice.getTokens(newUser);

        // await this.userService.update(newUser.id, {...newUser, refreshToken: tokens.refreshToken});

        // delete newUser['password'];
        // delete newUser['refreshToken'];

        // return newUser;
    }

    //login
    async signIn(dto: any): Promise<any> {
       
    }

    async refresh(email: string, refreshToken: string): Promise<any> {
      
    }

    async logout(userId: number): Promise<boolean>{
    
        return true;
    }

    async ping(): Promise<any>{
        this.msUserServiceClient.emit('ping', new UserEvent("asd@as.as"));
    }

    async ping1(): Promise<any>{
        return this.msUserServiceClient.send({cmd: 'ping1'}, new UserEvent("11111@as.as"));
    }
}
