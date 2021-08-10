import { useState } from "react"
import AppMainInfo from "../AppMainInfo/AppMainInfo"
import Arena from "../Arena/Arena"
import './AppMain.css'
import Card from "../Card/Card"

const AppMain = ({ store, arena, cards }) => {
    return (
        <div className="app__content">
            <AppMainInfo store={store} />
            <Arena arena={arena} />
            <div className="app__cards">
                <div className="app__cards__content">
                    {cards.map(card => {
                        return <Card key={card.id} card={card} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default AppMain