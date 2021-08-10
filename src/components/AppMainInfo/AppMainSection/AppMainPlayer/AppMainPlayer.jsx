import clsx from 'clsx'
import './AppMainPlayer.css'
const AppMainPlayer = ({ player, bgColor }) => {
    return (
        <li className={clsx('app__player', {
            ['app__player__bg']: bgColor
        })}>
            <div className="app__player__num">{player.id}</div>
            <div className="app__player__personal">
                <div className="app__player__pic">
                    <img src={player.urlIcon} alt="flag" />
                </div>
                <div className="app__player__name">{player.playerName}</div>
                <span className='app__player__name__add'>{player.more}</span>
            </div>
            <div className="app__player__actions">
                <div className={clsx('app__player__yellowCard', {
                    ['app__player__yellowCard-active']: player.yellowCard
                })}>
                    <span className="app__player__time">{player.time}</span>
                    <div className="app__player__icon">
                        <img src="/images/cards/yellowCard.png" alt="yellowCard" />
                    </div>
                </div>
                <div className={clsx('app__player__redCard', {
                    ['app__player__redCard-active']: player.redCard
                })}>
                    <span className="app__player__time">{player.time}</span>
                    <div className="app__player__icon">
                        <img src="/images/cards/redCard.png" alt="redCard" />
                    </div>
                </div>
                <div className={clsx('app__player__replace', {
                    ['app__player__replace-active']: player.replace
                })}>
                    <span className="app__player__time">{player.time}</span>
                    <div className="app__player__icon">
                        <img src="/images/cards/replace.png" alt="replace" />
                    </div>
                </div>
            </div>
            <div className="app__player__position">{player.position}</div>
        </li>
    )
}

export default AppMainPlayer