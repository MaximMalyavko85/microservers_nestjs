import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post, Req, Res,  UseGuards } from '@nestjs/common';
import { Response } from 'express'; 
import { ConfigService as CS } from '@nestjs/config';
//import { GuardJWTFactory } from 'src/common/guards/jwt-guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { IAuthUser, IUser } from 'src/common/interfaces/users';
import { CreateUserDTO, UserLoginDTO } from './dto';
import { AuthUserResponse, UserResponse } from './response';
import { AuthService } from './auth.service';
import { ClientProxy } from '@nestjs/microservices';
import { UserEvent } from 'src/common/events/user.events';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly configService: CS,
       
        ){}

    @ApiTags('API')
    @Post('register')
    @HttpCode(201)
    @ApiResponse({status: HttpStatus.CREATED, type: UserResponse})
    async register(@Body() dto: CreateUserDTO, @Res({ passthrough: true }) response: Response): Promise<any> {
            //return await this.authService.signUp(dto);
    }

    @ApiTags('API')
    @Post('login')
    @HttpCode(200)
    @ApiResponse({status: HttpStatus.OK, type: AuthUserResponse})
    async login(@Body() dto: UserLoginDTO, @Res({ passthrough: true }) response: Response): Promise<any> {
        // const { user, tokens }  = await this.authService.signIn(dto);
        // const domenPath: string = "/api/v1/auth";

        // response.cookie('jwt', tokens.refreshToken, {
        //     httpOnly: true,
        //     path: domenPath,
        //     domain: this.configService.get<string>("JWT_DOMEN"),
        //     maxAge: this.configService.get<number>('JWT_REFRESH_EXPIRE_COOKIES'),
        // });

        // return {
        //     user, 
        //     accessToken: tokens.accessToken,
        // };
    }

    @ApiTags('API')
    @Get("refresh")
    @HttpCode(200)
   // @UseGuards(GuardJWTFactory('jwt-refresh'))
    @ApiResponse({status: HttpStatus.OK, type: AuthUserResponse})
    async refresh(@Req() request, @Res({ passthrough: true }) response: Response): Promise<any> {
        // const {email, refreshToken} = request.user;

        // const { user, tokens } =  await this.authService.refresh(email, refreshToken);
        // const domenPath: string = "/api/v1/auth";

        // response.cookie('jwt', tokens.refreshToken, {
        //     httpOnly: true,
        //     path: domenPath,
        //     domain: this.configService.get<string>("JWT_DOMEN"),
        //     maxAge: this.configService.get<number>('JWT_REFRESH_EXPIRE_COOKIES'),
        // });
        // return {
        //     user, 
        //     accessToken: tokens.accessToken,
        // };
    }

    @ApiTags('API')
    @Post('logout')
    @HttpCode(204)
    //@UseGuards(GuardJWTFactory('jwt'))
    @ApiResponse({status: HttpStatus.NO_CONTENT})
    async logout(@Req() request, @Res({ passthrough: true }) response: Response) {
        // const { userId } = request.user;

        // await this.authService.logout(userId);

        // const domenPath: string = "/api/v1/auth";
        // response.clearCookie("jwt", {
        //     path: domenPath,
        //     domain: this.configService.get<string>("JWT_DOMEN"),
        // });
        
        // return;
    }

    @ApiTags('API')
    @Get('ping')
    @HttpCode(200)
    //@UseGuards(GuardJWTFactory('jwt'))
    @ApiResponse({status: HttpStatus.NO_CONTENT})
    async test(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
        console.log("emit====>")
        return this.authService.ping()
        //return "PONG"
    }

    @ApiTags('API')
    @Get('ping1')
    @HttpCode(200)
    //@UseGuards(GuardJWTFactory('jwt'))
    @ApiResponse({status: HttpStatus.NO_CONTENT})
    async test1(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
        console.log("send====>")
        return this.authService.ping1()
        //return "PONG"
    }
}
