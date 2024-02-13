import {TcpClientsSelectDto} from "@/Types/App/ApiTypes/TcpClients.types";
import {DataSourceSelectDto} from "@/Types/App/ApiTypes/DataSources.type";
import {PageSelectDto} from "@/Types/App/ApiTypes/Pages.type";

// get all users freom the api !!!
export interface UserSelectDtoPaginatedApiResult {
    isSuccess?: boolean
    statusCode?: number
    message?: string
    data?: UserSelectDtoPaginated
}

export interface UserSelectDtoPaginated {
    content: UserSelectDto []
    totalPages: number
    totalSize: number
}

export interface UserSelectDto {
    id: number
    fullName: string
    created: string
    lastLoginDate: string
    userName: string
    usersCount: number
    userOnlineCount: number
    userClients: UserClientSelectDto[]
    dataSources:DataSourceSelectDto[]
    pages: PageSelectDto[]
}

export interface UserClientSelectDto {
    id: number
    clients: TcpClientsSelectDto
}


//get one user from api
export interface UserSelectDtoApiResult extends UserSelectDtoPaginated{
    data : UserSelectDto
}

//user dto for creation
export interface UserDto{
    color?:string,
    id?:number
    userName:string
    fullName:string
    password:string
    passwordConfirm?:string
}