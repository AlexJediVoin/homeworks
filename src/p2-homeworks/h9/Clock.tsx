import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {

    const [timerId, setTimerId] = useState<number>(0)
    let [date, setDate] = useState<number>(0)
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop();
        setDate(new Date().getTime()); // unix timestamp (seconds)
        const id: number = window.setInterval(() => {
            setDate(new Date().getTime())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    const stringTime = new Date(date).toLocaleTimeString('ru-RU');
    const stringDate = new Date(date).toLocaleDateString('ru-RU');
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
    )
}

export default Clock
