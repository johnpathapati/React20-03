import { useState } from 'react';
import './App.css';
import BasicClassComponent from './Component/basic-class-component';
import BasicPropsFunction from './Component/props_function';
import BasicStateComponent from './Component/state-component';
import BasicClassComponentinlineCss from './Component/basic-class-component-inlinecss';
import BasicFunctionInlineCss from './Component/basic-function-inlinecss';
import BasicClassComponentExternalCss from './Component/external-class-component';
import BasicExternalFunction from './Component/external-function';
import BasicParentClassComponent from './Component/basic-parent-class-component'; 
import BasicParentModuleClassComponent from './Component/basic-module-class-component-parent';
import ParentListDisplay from './Component/parent-listdisplay';
import BasicClassComponentPortal from './Component/basic_class_component_portal';
import BasicFunctionComponentPortal from './Component/basic_function_component_portal';
import BasicClassComponentCreateref from './Component/basic-class-component-focus';

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
      <BasicStateComponent></BasicStateComponent>
      <BasicClassComponentinlineCss></BasicClassComponentinlineCss>
      <BasicFunctionInlineCss></BasicFunctionInlineCss>
      <BasicClassComponentExternalCss></BasicClassComponentExternalCss>
      <BasicExternalFunction></BasicExternalFunction>
      <BasicParentClassComponent></BasicParentClassComponent>
      <BasicParentModuleClassComponent></BasicParentModuleClassComponent>
      <ParentListDisplay></ParentListDisplay>
      <BasicClassComponentPortal></BasicClassComponentPortal>
      <BasicFunctionComponentPortal></BasicFunctionComponentPortal>
      <BasicClassComponentCreateref></BasicClassComponentCreateref>
    </div>
  )
}

export default App;
