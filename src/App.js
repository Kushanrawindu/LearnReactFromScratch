import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message/> */}

      {/* <Greet name="Kushan" heroName="a">
        <p>this is children props</p>
      </Greet>
      <Greet name="Ravindu" heroName="b">
        <button>Action</button>
      </Greet>
      <Greet name="Kulasooriya" heroName="c">

      </Greet>
      <Welcome name="Kushan"/>
      <Welcome name="Ravindu"/>
      <Welcome name="Kulasooriya"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
