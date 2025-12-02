import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducer.js'

const STORE = createStore(reducer)

createRoot(document.getElementById('root')).render(
  <Provider store={STORE}>
    <App />
  </Provider>,
)
