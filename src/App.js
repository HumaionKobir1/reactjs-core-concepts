import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer  = {name: 'Humaion kobir', job: 'singer'};
const singer2  = {name: 'touhid', job: 'singer'};

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
  padding: '4px',
  borderRadius: '10px'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <h2>Hello dude. react, How are you?</h2>
        </div>

        <div className="music">
          <p>Name: {number + 2}</p>
          <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
          <p style={{color:'blue', backgroundColor: 'yellow', borderRadius: '10px'}}>Name: {singer2.name} {singer2.job}</p>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>humaion kobir</h1>
        .
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
