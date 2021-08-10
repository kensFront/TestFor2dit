import logo from './logo.svg';
import './normalize.css'
import './App.css'
import AppMain from './components/AppMain/AppMain';

function App({ store }) {
  return (
    <div className="app">
      <div className="app__main">
        <div className="app__container">
          <div className="app__title">
            {store.title}
          </div>
          <AppMain cards={store.cards} arena={store.arena} store={store.teams} />
        </div>
      </div>
    </div>
  );
}

export default App;
