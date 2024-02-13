import {UserClientSelectDto} from "@/Types/App/ApiTypes/Users.type";

export interface IDialogs {
    id?: any;
    openDialog: boolean;
    setOpenDialog: (value: boolean) => void;
}

export interface IAssignClientDialog extends IDialogs {
    data: UserClientSelectDto[]
}