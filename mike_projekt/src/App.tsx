//import { useState } from 'react'
import type { HelloWorld } from './types';
import './App.css'

function App() {

  const helloWorld: HelloWorld = { name: 'Hello World!' };

  return (

    <div>
      <h1 className="text-3xl font-bold underline">
        {helloWorld.name}
      </h1>
    </div>
        
    
  );
}

export default App
