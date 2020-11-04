import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: [number, number]
    step?: number
    // min, max,, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, step
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки


    const onChangeCallback = (e: ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(value);
    }

    return (
        <>
            <div style={{width: 400}}>
                <Slider value={value}
                        onChange={onChangeCallback}
                        aria-labelledby="range-slider"
                        valueLabelDisplay="auto"
                        step={step}
                />
            </div>
        </>
    );
}

export default SuperDoubleRange;
