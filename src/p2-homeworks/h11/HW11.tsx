import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue] = useState<number[]>([value1, 37]);

    const handleChange = (event: Event, newValue: number | number[], activeThumb?: number): void => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0]);
            if (value1 === value2[1]) {

                setValue([value1, value1])

            } else {
                setValue(newValue as number[]);
            }
        }
    };
    let onChangeRange = (value: number) => {
        setValue1(value)
        if (value1 > value2[1]) {

            setValue([value2[1], value2[1]])

        } else {
            setValue([value1, value2[1]])
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={onChangeRange}
                    handleChange={handleChange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                {/* <span>{value1}</span>*/}
                <SuperDoubleRange
                    onChangeRange2={onChangeRange}
                    handleChange={handleChange}
                    // onChangeRange={onChangeRange2}
                    paramValue1={value1}
                    paramValue2={value2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>
                   {/* {value2}*/}
                </span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
