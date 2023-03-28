import React from 'react';
import styles from '../styles/Home.module.css'

const Warning = (): JSX.Element => {
    return(
        <h1 className={styles.code} style={{background: '#F2382D', color:'white', textAlign:'center'}}>
            This page is still in active development, and is not yet complete. Thanks for your patience, and sorry for any inconvenience caused.
        </h1>
    )
}

export default Warning;