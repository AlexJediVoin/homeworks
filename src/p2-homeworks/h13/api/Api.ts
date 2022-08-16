import axios, {AxiosResponse} from "axios";

export type MyResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    },
    yourQuery:{}
}

type data = {
    success: boolean
}
export const MyApi = {

    MyPostRequest (success: boolean) {
        let promise =  axios.post<any ,AxiosResponse<MyResponseType>,{success:boolean}>(`https://neko-cafe-back.herokuapp.com/auth/test`,{success:success}).then((res)=>
            res.data
        )
        return promise
    }
}