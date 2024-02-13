import {UserSelectDtoApiResult, UserSelectDtoPaginatedApiResult} from "@/Types/App/ApiTypes/Users.type";
import React, {ReactNode} from "react";

export interface IGetAllUsersComponent {
    usersData : UserSelectDtoPaginatedApiResult
    isLoading:boolean
}

export interface IGetUserComponent{
    userData : UserSelectDtoApiResult
}

export interface IUserTable{
    tabNumber:number
    component:any
}