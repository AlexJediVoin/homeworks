import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import My_Routes from './My_Routes'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <My_Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
