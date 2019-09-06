import React, { Component } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom' //npm install react-router-dom

import logo from './../image/axa-logo.png'

import styles from './HeaderTitle.module.scss'

export default class HeaderTitle extends Component {
    render() {
        return (
            <header className={styles.component}>
                <div className={styles.container + " container"}>
                    <Link title="Aller à Axa Banque Extranet" to="/">
                        <h1 className={styles.title + " typo20 mt-2"} >
                            <img alt="AXA logo" src={logo} />
                            <span className="ml-3">S.O.S. Web Console</span>
                        </h1>
                        
                    </Link>
                    <img width="40" height="40" src="./user.svg" className={styles.configuration}/>
                    <nav hidden>
                        <ul>
                            <li><Link to="/" id="home" >Home </Link></li>
                            <li><Link to="/newAsset" id="newAsset" >New Asset </Link></li>
                            <li><Link to="/editAsset" id="editAsset" >Edit Asset </Link></li>
                            <li><Link to="/guide" id="guide" >Guide </Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
        )
    }
}
