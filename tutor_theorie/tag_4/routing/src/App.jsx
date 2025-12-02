import './App.css'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'

function App() {

  return (
    <>
      <Nav />
      <hr />
      <Routes>
        {/* 
        Bei "element" wird JSX-Ausdruck übergeben.
        <Route path="/" element={<div>Startseite</div>} />
        */}
        {/* 
        Man darf nicht mehrere Route-Tags mit demselben Pfad angeben.
        Es können beliebige Inhalte zu einer Pfadangabe gelegt werden.
        <Route path="/" element={<><Home /><About /></>} />
        */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About wen="uns" />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:department" element={<Team />} />
        <Route path="/team/:department/:id" element={<Team />} />
      </Routes>
    </>
  )
}

export default App
