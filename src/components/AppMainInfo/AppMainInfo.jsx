import AppMainSection from './AppMainSection/AppMainSection'
import AppTabs from '../AppTabs/AppTabs'
import AppTab from '../AppTabs/AppTab/AppTab'
import './AppMainInfo.css'
import { useState } from 'react'

const AppMainInfo = ({ store }) => {
    let [idx, setIdx] = useState(0)
    return (
        <div className="app__main__info">
            <div className="app__tabs">
                {store.map(team => {
                    return <AppTab key={team.id} onClick={(e) => {
                        e.preventDefault()
                        setIdx(idx = team.id)
                    }}
                        id={team.id}
                        title={team.name}
                        imageUrl={team.icon} />
                })}

            </div>

            <div className="app__main__players">
                <AppMainSection store={store[idx].teamBlock} />
            </div>
        </div>
    )
}

export default AppMainInfo