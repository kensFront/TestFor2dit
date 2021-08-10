import AppTab from './AppTab/AppTab'
import './AppTabs.css'



const AppTabs = ({ data, onClick, tabs }) => {
    return (
        <div className="app__tabs">
            {tabs.map(team => {
                return <AppTab onClick={onClick} id={team.id} title={team.name} imageUrl={team.icon} />
            })}
        </div>
    )
}
export default AppTabs