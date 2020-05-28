import React from 'react'
import styles from './Navigation.module.scss';
import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <div className={styles.container}>
            <nav>
                <li><NavLink exact activeClassName={styles.active} to="/" >Welcome</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="/rules" >Rules</NavLink></li>
            </nav>
        </div>
    )
}

export default Navigation;
