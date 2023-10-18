import { useState } from 'react';
import './App.css';
import React from 'react';
import Tour from './component/Tour';
import data from './data';


const App = () =>{
  const[tours,setTours] = useState(data);

  function removeTour(id)
  {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length ===0)
  {
    return(
      <div className='refresh h-[100vh] flex justify-center items-center gap-5  '>
        <h2>No Tours left</h2>
        <button className='refesh-btn  border-black border p-2 rounded-md shadow-lg' onClick={()=>setTours(data)}>Refresh</button>
      </div>
    );
  }
  return(
    <div className='app'>
    <Tour tours={tours} removeTour={removeTour}></Tour>
    </div>
  )
  ;
};

export default App;
