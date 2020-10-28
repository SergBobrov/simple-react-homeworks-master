import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)// stop
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            let newDate = new Date()
            setDate(newDate)// setDate
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)// show
    };
    const onMouseLeave = () => {
        setShow(false)// close
    };

    // const stringTime = date ?
    //     `${String(date.getHours()).length < 2 ? "0" + date.getHours() : date.getHours()}:${String(date.getMinutes()).length < 2 ? "0" + date.getMinutes() : date.getMinutes()}:${String(date.getSeconds()).length < 2 ? "0" + date.getSeconds() : date.getSeconds()}`
    //     : "Time"; // fix with date
    // const stringDate = date ? `${String(date.getDate()).length < 2 ? "0" + date.getDate() : date.getDate()}•${String(date.getMonth()).length < 2 ? "0" + date.getMonth() : date.getMonth()}•${date.getFullYear()}` : "Date"; // fix with date

    const stringTime = date ? date.toTimeString() : "Time";
    const stringDate = date ? date.toDateString() : "Date";

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;