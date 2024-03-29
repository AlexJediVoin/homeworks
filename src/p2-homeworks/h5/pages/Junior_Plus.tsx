import React from 'react'
import HW10 from '../../h10/HW10'
import HW11 from '../../h11/HW11'
import HW12 from "../../h12/HW12";
import s from '../style/StyleForAllPages.module.css'
import {Provider} from "react-redux";
import store from "../../h10/bll/store";
import HW13 from '../../h13/HW13';

function Junior_Plus() {
    return (
        <div className={s.container}>
           <Provider store={store}><HW10/></Provider>
            <HW11/>
            <HW13/>
            <Provider store={store}><HW12/></Provider>
        </div>
    )
}

export default Junior_Plus

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз