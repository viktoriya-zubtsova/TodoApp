import logo from './logo.svg';
import './App.css';

const hi = 'Hello, friend!';
const value = true;
const value2 = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'blue'
        }}>{hi}(значeние переменной)</h1>
        <p>
        {888}(Число) {888*100}(результат арифметической операции)
        {value && 'value is true'}(результат логической операции)
        {value2 ? 'value2 is true' : 'value2 is false'}(использования тернарного условия)
        {undefined}{null}{false}{true}(undefined, null, false и true не выводятся)
        </p>
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
      </header>
    </div>
  );
}

export default App;
