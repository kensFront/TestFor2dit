import './Arena.css'

const Arena = ({ arena }) => {
    return (
        <div
            style={{ background: `url("/images/Arena/arena.png") left/cover no-repeat` }}
            className="app__info">
            <div className="app__info__place">
                <span className="app__info__city">{arena.city}</span>
                <div className="app__info__widget">
                    <div className="app__info__widget__icon"><img src="/images/Arena/cloud.png" alt="" /></div>
                    <span className="app__info__temperature">{arena.temperature}</span>
                </div>
            </div>
            <div className="app__info__adress">
                <div className="app__info__adress__icon">
                    <img src="/images/Arena/location.png" alt="" />
                </div>
                <span className="app__info__adress__text">{arena.adress}</span>
            </div>
            <div className="app__info__volume">
                <div className="app__info__volume__icon">
                    <img src="/images/Arena/person.png" alt="" />
                </div>
                <span className="app__info__volume__text">{arena.volume}</span>
            </div>
        </div>
    )
}

export default Arena