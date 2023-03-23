import logo from './logo.svg';
import './App.css';

// const number = 5555;
// const singer  = {name: 'Humaion kobir', job: 'singer'};
const singer2  = {name: 'Prince mahmud', job: 'singer'};

// const singerStyle = {
//   color: 'purple',
//   backgroundColor: 'white',
//   padding: '4px',
//   borderRadius: '10px'
// }

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <Person name ="Humaion Kobir" nayika = "Beuty akter bithi"></Person>
      <Person name = "Tanvir rahman" nayika = "Sharmin akter"></Person>
      <Person></Person>
      <h5>New component YEYH!</h5>
      <Friend phone = "017777"></Friend>
    </div>
  );
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h3>{props.name}</h3>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props){
  console.log(props);
  return(
    <div className='container'>
      <h3>Name: {singer2.name}</h3>
      <p>{props.phone}</p>
    </div>
  )
}

export default App;
