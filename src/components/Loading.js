import React, { Component } from 'react'

import styles from './Loading.module.scss'

export default class UtilLoading extends Component {
    render() {
        return (
            <div className={styles.component} >
                <div className={styles.spinner + " " + styles.active}>
                    <div className={styles.animation}>&nbsp;</div>
                </div>
            </div>
        )
    }
}
