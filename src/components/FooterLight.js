import React, { Component } from 'react'

import styles from './FooterLight.module.scss'

export default class FooterLight extends Component {
    render() {
        return (
            <footer id="footer">
                <div className={"row " + styles.box }>
                    <div className="container">
                        <span className={styles.text + " d-block text-center text-sm-right"}>
                            {"Privacy Policy © " + new Date().getFullYear() + " AXA, All Rights Reserved."}
                        </span>
                    </div>
                </div>
            </footer>
        )
    }
}
