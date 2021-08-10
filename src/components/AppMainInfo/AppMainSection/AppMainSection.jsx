import './AppMainSection.css'
import AppMainPlayer from './AppMainPlayer/AppMainPlayer'
const AppMainSection = ({ store }) => {
    return (
        <>
            {store.map(section => {
                return (
                    <section className="app__main__section">
                        <div className="app__main__section__title">{section.title}</div>
                        <div className="app__main__section__players">
                            <ul>
                                {section.teamComposition.map(player => {
                                    if (section.teamComposition.indexOf(player) % 2 == 0) {
                                        return <AppMainPlayer key={player.id} bgColor={true} player={player} />
                                    } else {
                                        return <AppMainPlayer key={player.id} player={player} />
                                    }
                                })}
                            </ul>
                        </div>
                    </section>)
            })}
        </>
    )
}


export default AppMainSection