import {DataSourceSelectDto} from "@/Types/App/ApiTypes/DataSources.type";

export interface PageSelectDto {
    id: number
    title: string
    description: string
    userId: number
    dataSourceIds?: number []
}

export interface PageDataSourceSelectDto {
    id: number
    dataSourcesId: number
    pageId: number
    dataSources: DataSourceSelectDto
}

export interface PageWithDataSourceSelectDto {
    id: number
    title: string
    description: string
    pageDatasources : PageDataSourceSelectDto
}