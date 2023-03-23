import logo from './logo.svg';
import './App.css';

// const number = 5555;
const singers  = [
  {name: 'Humaion kobir', job: 'singer'},
  {name: 'suvo khan', job: 'banker'},
  {name: 'agun', job: 'fagun'},
  {name: 'taskin', job: 'Cricket'}
];
const singer2  = {name: 'Prince mahmud', job: 'singer'};

// const singerStyle = {
//   color: 'purple',
//   backgroundColor: 'white',
//   padding: '4px',
//   borderRadius: '10px'
// }

function App() {
  const nayoks = ['salman sah','Riaz', 'bapparaz', 'sakil khan', 'ferdows', 'omor sani', 'razzak'];
  const naykas = ['Mousumi', 'sabnur', 'purnima'];
  return (
    <div className="App">
      <h1>React</h1>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name = {nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name} nayika={singer.job}></Person>)
      }


      {/*
      <Person name = "Tanvir rahman" nayika = "Sharmin akter"></Person> */}
      <Person name = {nayoks[0]} nayika = {naykas[1]}></Person>
      <Person name ="Humaion Kobir" nayika = "Beuty akter bithi"></Person>
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
