import React, {ChangeEventHandler} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {AppStoreType} from "../h10/bll/store";
import {changeColorThemAC, StateType, themeType} from "./bll/themeReducer";

const themes: themeType[] = ['dark', 'red', 'some','blue','purple'];

function HW12() {
    const theme = useSelector<AppStoreType, StateType>(state=> state.them); // useSelector
    const dispatch = useDispatch();
    const onChangeOption =(newThem: themeType) => {
            dispatch(changeColorThemAC(newThem));
    }

    return (
        <div className={s[theme.currentColorThem]}>
            <hr/>
            <span className={s[theme.currentColorThem + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} value={theme.currentColorThem} onChangeOption={onChangeOption}/>
            <SuperRadio options={themes} value={theme.currentColorThem} onChangeOption={onChangeOption}/>
            <hr/>
        </div>
    );
}

export default HW12;
