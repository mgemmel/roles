import React from 'react'
import styles from './Rules.module.css';
import Sidebar from './Sidebar';

function Rules() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.rules}>
                rules
            </div>
        </div>
    )
}

export default Rules
