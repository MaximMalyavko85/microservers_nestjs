export interface IUser {
    id           : number;
    role         : string;
    email        : string;
    gender       : string;
    firstName    : string;
    userName     : string;
 }

 export interface IUserWithRefresh extends IUser{
    refreshToken : string;
 }

 export interface IUserWithPassword extends IUser{
    password: string;
}

 export interface IUserWithWatchinglist extends IUser{
    //watchList: WatchList[];
 }

 export interface IDbUser extends IUserWithRefresh, IUserWithPassword{}

export interface IAuthUserWithTokens {
    user: IUser;
    tokens: {
        accessToken: string,
        refreshToken: string,
    };
}

export interface IAuthUser {
   user: IUser;
   accessToken: string;
}