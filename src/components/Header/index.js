import React from 'react'
import logo from '../../assets/logo.png';
import './styles.scss'

const  Header = () => {
    return (
        <header data-test="headerWrapper">
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt="logo" data-test="logoImg" />
                </div>
            </div>
        </header> 
    )
}

export default Header
