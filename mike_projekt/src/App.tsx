// root/src/App.tsx
//

import type { HelloWorld } from './types';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'

/** 
 * @returns dies das
 */
const App: React.FC = () => {

  const helloWorld: HelloWorld = { name: 'Hello World!' };

  {/*    
    <div>
      <h1 className="text-3xl font-bold underline">
        {helloWorld.name}
      </h1>
    </div> 
  */}

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/about" element={ <AboutPage/> } />
      </Routes>
    </Router>
  );
};

export default App;
 