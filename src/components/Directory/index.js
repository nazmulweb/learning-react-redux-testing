import React from 'react';
import apple  from '../../assets/apples.jpg'
import pizza  from '../../assets/pizza.jpg'
import './styles.scss'
const Directory = props  =>{
    return (
        <div className="directory">
            <div className="item"
                style={{background: `url(${apple})`}}
            >
                <a>
                    Apple
                </a>
            </div>
            <div className="item"
                style={{background: `url(${pizza})`}}
            >
                <a>
                    Pizza
                </a>
            </div>
        </div>
    )
}

export default Directory
