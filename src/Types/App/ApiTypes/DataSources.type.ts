import {TcpClientsSelectDto} from "@/Types/App/ApiTypes/TcpClients.types";

export interface DataSourceSelectDto {
    id: number
    title: string
    schedule: string
    description: string
    connectionString: string
    sqlQuery: string
    sqlDateFormat: string
    dataSourceFilePath: string
    dataSourcesEnum:number
    apiUrl: string
    userId: number
    clientId: number
    clients : TcpClientsSelectDto
    created:string
}