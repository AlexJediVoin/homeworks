import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './common/c4-SuperEditableSpan/SpanStyle.module.css'

function HW6() {
    const [value, setValue] = useState<string>('Этот текст можно редактировать!')
    const onChangeText =  (newText: string) => {
        setValue(newText);
    }
    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', value))
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}

            <div>
                <img className={s.img_pencil} src={'https://img.icons8.com/material/2x/pencil--v2.png'}/>
                <SuperEditableSpan
                    value={value}
                    onChangeText={onChangeText}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
