import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type SuperDoubleRangePropsType = {
    onChangeRange2: (value: number) => void
    //onChangeRange?: (value: [number, number]) => void
    handleChange : (event: Event, newValue: number | number[], activeThumb: number)=>void
    paramValue1: number
    paramValue2: number[] | number
    value?: [number, number]
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange2, value,
        paramValue1,
        paramValue2,
        handleChange
        // min, max, step, disable, ...
    }
) => {

    return (<div>
        <span>{paramValue1}</span>
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={paramValue2}

                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    </div>);
}

export default SuperDoubleRange
