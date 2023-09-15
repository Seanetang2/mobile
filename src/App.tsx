import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Mainrouter } from './router/Mainrouter';


function App() {
  return (
    <div className="mobile">
         <RouterProvider router={Mainrouter} />
    </div>
  );
}

export default App;
