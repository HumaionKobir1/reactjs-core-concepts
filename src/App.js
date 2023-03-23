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
      <h1>Humaion Kobir</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New component YEYH!</h5>
      <Friend></Friend>
    </div>
  );
}

function Person(){
  return (
    <div className='person'>
      <h3>REACT</h3>
      <p>Hey react how are you</p>
    </div>
  )
}

function Friend(){
  return(
    <div className='container'>
      <h3>Name: Prince mahmud</h3>
      <p>Job: Polli staf</p>
    </div>
  )
}

export default App;
