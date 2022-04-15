import React from 'react'
import HW10 from '../../h10/HW10'
import HW11 from '../../h11/HW11'
import HW12 from "../../h12/HW12";
import s from '../style/StyleForAllPages.module.css'

function Junior_Plus() {
    return (
        <div className={s.container}>
            <HW10/>
            <HW11/>
            <HW12/>
        </div>
    )
}

export default Junior_Plus

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз