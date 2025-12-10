// root/src/main.tsx
// The main entry point of the React application, 
// rendering the App component

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import './styles/app.css'

const root = ReactDOM.createRoot(document.getElementById('root')! as HTMLElement)

/** 
 * @returns dies das
 */
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
