import './App.scss';
import './style/style.scss';
import MobileHeader from './components/Header/MobileHeader';

function App() {
  return (
    <div className="App">
      <header>
        <MobileHeader />

        <div className='profile'>
            <div className='profile__logo'></div>
            <h3 className='profile__name'>Jovan Samčović <i className='icon hand'></i></h3>
        </div>
      </header>
    </div>
  );
}

export default App;
