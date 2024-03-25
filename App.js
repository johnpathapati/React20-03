import { useState } from 'react';
import './App.css';
import BasicClassComponent from './Component/basic-class-component';
import BasicPropsFunction from './Component/props_function';

function App() {
  
  let stock = 10;
  let [counter, setCounter] = useState(0);

  return (
    <div className='App'>
    <div className='warpper'>
    <button className='minus' disabled={counter === 0} onClick={()=>{
        if(counter > 0){
          setCounter (counter - 1)
        }
      }}> - </button>
    
        <p>{counter}</p>
  
    <button className='plus' disabled={counter === stock} onClick={()=>{
        if(counter < stock){
          setCounter(counter + 1)
        }
      }}> + </button>
    
     
  </div> 
    <BasicClassComponent></BasicClassComponent>
    <BasicPropsFunction text='Venkat' tool='ReactJs'></BasicPropsFunction>
  </div>
  )
}

export default App;
