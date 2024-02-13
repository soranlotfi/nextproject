import {TcpConnectionsSelectDto} from "@/Types/App/ApiTypes/TcpConnections.types";
import {UserSelectDtoApiResult, UserSelectDtoPaginatedApiResult} from "@/Types/App/ApiTypes/Users.type";



export interface IPostAssignClient{
    userId:number
    clientsId:number
}

export interface TcpClientsSelectDto{
    id:	number
    title:	string
    description:	string
    isOnline:	boolean
    tcpConnections:TcpConnectionsSelectDto
}

export interface TcpClientsSelectDtoApiResult{
    isSuccess?: boolean
    statusCode?: number
    message?: string
    data:TcpClientsSelectDto
}