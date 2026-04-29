import logo from './logo.svg';
import './App.css';

import MenuPrincipal from './components/MenuPrincipal';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="container mt-5">
          <h1>test2</h1>
          <MenuPrincipal />
        </div>
      </header>
    </div>
  );
}

export default App;
