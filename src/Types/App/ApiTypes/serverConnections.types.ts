export interface ServerConnectionsDtoListApiResult {
    isSuccess?: boolean
    statusCode?: number
    message?: string
    data?:ServerConnectionsDto []
}


export interface ServerConnectionsDto {
    id: number
    connectionId: string
    clientId: string
    lastLogin: string
    isOnline: boolean
}