import './AppTab.css'
import React from 'react'


const AppTab = ({ title, onClick, imageUrl }) => {
    return (
        <div onClick={onClick} className="app__tab">
            <div className="app__tab__icon"><img src={imageUrl} alt="" /></div>
            <div className="app__tab__title">{title}</div>
        </div>

    )
}

export default AppTab