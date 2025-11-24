import './App.css';
import { Route, Routes } from 'react-router';
import Table from './components/Table';

function App() {
  return (
    <>
      <h1>Music</h1>
      <Table />

      <nav>
        <NavLink to='/'>Startseite</NavLink>
        <br />
      </nav>
    </>
  );
}

export default App;
