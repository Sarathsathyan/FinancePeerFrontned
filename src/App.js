
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import JsonList from './JsonList';

function App() {
  return (
    <div className="App">
      <h3>User Data Extracted From File</h3>
      <div className='container'>
      <JsonList/>
      </div>
      
    </div>
  );
}

export default App;
