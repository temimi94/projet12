import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../Images/nav1.png'
import img2 from '../../Images/nav2.png'
import img3 from '../../Images/nav3.png'
import img4 from '../../Images/nav4.png'

import './nav.css'

//integration of the nav
function Nav() {
    return (
        <div className="container-nav">
            <p>Copiryght, SportSee 2020</p>
            <nav>
                <Link>
                    <img src={img1} alt="sport" />
                </Link>
                <Link>
                    <img src={img2} alt="" />
                </Link>
                <Link>
                    <img src={img3} alt="" />
                </Link>
                <Link>
                    <img src={img4} alt="" />
                </Link>
            </nav>
        </div>
    )
}

export default Nav
