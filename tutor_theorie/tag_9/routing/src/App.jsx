import './App.css'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import NoMatch from './pages/NoMatch'
import Products from './pages/Products'
import ProductsNew from './pages/ProductsNew'
import ProductsFeatured from './pages/ProductsFeatured'
import ProductsIndex from './pages/ProductsIndex'

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
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductsIndex />} />
          <Route path="new" element={<ProductsNew />} />
          <Route path="featured" element={<ProductsFeatured />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
