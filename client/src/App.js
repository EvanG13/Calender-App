import './App.css';
import Calendar from './components/Calendar';
import { useState } from 'react';


const App = () => {

  let d = new Date();
  let startingYear = d.getFullYear();
  const [currentYear, setCurrentYear] = useState(startingYear); //start app viewing the current year.


  const backYear = () =>{
    setCurrentYear(currentYear-1);
  }
  
  const forwardYear = ( ) =>{
    setCurrentYear(currentYear + 1);
  }


  return (
    <div className="App">
      
      <Calendar yearNum={currentYear} backYear = {backYear} forwardYear = {forwardYear}/>
    </div>
  );
}

export default App;
