//import { useState } from 'react'
import type { HelloWorld } from './types';
import './App.css'

interface HelloWorldType {
  helloworld: HelloWorld;
}

function App() {

  const helloWorldData: HelloWorld = { name: 'Hello World!' };
  const helloWorldTest: HelloWorldType = {
    helloworld: helloWorldData,
  };

  return (
    <>
      <div>
        <h1>{helloWorldTest.helloworld.name}</h1>
      </div>
    </>
  );
}

export default App
