import axios, {AxiosResponse} from 'axios';
import React, {ChangeEvent, useState} from 'react';
import {MyApi, MyResponseType} from "./api/Api";

const Hw13 = () => {
    return (
        <div>
            <Request />
        </div>
    );
};

const Request = () => {
    let [checked,SetChecked]=useState<boolean>(false)
    let [state, SetState]= useState<any>(null);
    let [error, SetError]= useState<any>(null)
    const onChangeChecked = (e:ChangeEvent<HTMLInputElement>) => {
        SetChecked(e.currentTarget.checked);
    }
    const ClickPostRequest = () => {
        MyApi.MyPostRequest(checked).then(res=>{
            SetError(null);
            SetState(res.info) }
        ).catch(error=>{
            SetState(null);
            SetError(error.response ? error.response.data.errorText : error.message)
        })
    }
    return <>
        <input type="checkbox" checked={checked} onChange={onChangeChecked}/><br/>
        <button onClick={ClickPostRequest}>Click to post request</button><br/>
        {state && state}<br/>
        {error && error}<br/>
    </>
}


export default Hw13;