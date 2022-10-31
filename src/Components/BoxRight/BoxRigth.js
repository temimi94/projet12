import React from 'react'
import propTypes from 'prop-types'
import './boxRigth.css'

function BoxRigth(props) {
    return (
        <div>
            <div className="boxRigth">
                <img src={props.image} alt="box icon" />
                <div className="boxRigthText">
                    <h3>
                        {props.macroCount}
                        <span>{props.type}</span>
                    </h3>
                    <p>{props.macroName}</p>
                </div>
            </div>
        </div>
    )
}

BoxRigth.prototype = {
    image: propTypes.string,
    macroCount: propTypes.number,
    type: propTypes.string,
    macroName: propTypes.string,
}

export default BoxRigth
