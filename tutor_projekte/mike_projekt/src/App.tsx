// root/src/App.tsx
// The main application component that sets up routing, 
// imports necessary pages and types.

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
//import type { HelloWorld } from './types';

/** 
 * @returns todo
 */
const App: React.FC = () => {

  //const helloWorld: HelloWorld = { name: 'Hello World!' };

  {/*    
    <div>
      <h1 className="text-3xl font-bold underline">
        {helloWorld.name}
      </h1>
    </div> 
  */}

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
