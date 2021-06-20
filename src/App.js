import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import { useContext } from 'react';
import PersonContext from './contexts/PersonContext';

function App() {
  const personStore = useContext(PersonContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{personStore.age}</p>
        <p>
          <button onClick={click}>Plus</button>
        </p>
      </header>
    </div>
  );

  function click() {
    personStore.plus();
  }
}

export default observer(App);
