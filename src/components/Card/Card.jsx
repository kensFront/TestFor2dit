import "./Card.css"


const Card = ({ card }) => {
    function ShowImg() {
        if (card.icon) {
            return <img src={card.icon} alt="icon" />
        }
    }
    return (
        <div className="app__card">
            <div className="app__card__content">
                <div className="app__card__title">{card.title}</div>
                <div className="app__card__person">
                    <div className="app__card__name">{card.fullName}</div>
                    <div className="app__card__icon">{ShowImg()}</div>
                </div>
                <div className="app__card__footer">
                    <div className="app__card__city">{card.city}</div>
                    <div className="app__card__category">{card.category}</div>
                </div>
            </div>
        </div>
    )
}

export default Card