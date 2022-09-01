import React, {useState} from 'react';
import Grid from './components/Grid';
import Navbar from './components/Navbar';

const App = () => {
  const [search, setSearch] = useState('');

  const  handleInput = (event) =>  {
    
    setSearch(event.target.value)
   
  }

  return (
    <>
      <Navbar handleInput={handleInput} search={search}/>
      
      <Grid search={search}/>
    </>
  )
}

export default App;