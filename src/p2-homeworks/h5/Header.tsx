import React from 'react'
import {Link} from "react-router-dom";
import s from './style/Header.module.css'

function Header() {
    return (

        <div className={s.panel}>
            <nav className={s.hidden_panel}>
                <Link className={s.nav_item} to={"/pre-junior"}> PreJunior</Link>
                <Link className={s.nav_item} to={"/junior"}> Junior</Link>
                <Link className={s.nav_item} to={"/junior+"}> Junior+</Link>
            </nav>
        </div>
    )
}

export default Header
