import type { JSX } from 'react'
import './App.css'
import Listen from './components/lists/Listen'
import Properties from './components/props/Properties'

export type Biografie = {
    geburtsort: string,
    geburtsdatum: string
}

// Pfeilfunktion:
// const App = () => <div>Hallo, Welt!</div>
function App() {

  let vorname = "Fritz"
  let nachname = "Fischer"

  let biografie: Biografie = {
    geburtsort: "Friedrichshafen",
    geburtsdatum: "01.01.1990"
  }

  let istAngemeldet = true

  let ausgabe1: JSX.Element | undefined
  if (istAngemeldet) {
    ausgabe1 = <div>Willkommen!</div>
  }

  let ausgabe2: JSX.Element
  if (istAngemeldet) {
    ausgabe2 = <div>Willkommen!</div>
  } else {
    ausgabe2 = <div>Bitte anmelden!</div>
  }
  
  /*
  if (istAngemeldet) {
    return <div>Willkommen!</div>
  } else {
    return <div>Bitte anmelden!</div>
  }
  */

  return (// JS-Kommentar
  <>
    {/* JSX-Kommentar */}

    Hallo, {vorname}!

    <h2>Conditional Rendering</h2>
    <h4>if-Logik</h4>
    {ausgabe1}
    <h4>if-else-Logik</h4>
    {ausgabe2}
      
    <h2>Conditional Rendering, Vol. 2</h2>
    <h4>if-Logik</h4>
    {
      /* if-Logik per Short-Circuit-Operator */
      istAngemeldet &&
      <div>Willkommen!</div>
    }
    <h4>if-else-Logik</h4>
    {
      /* if-else-Logik per ternärem Operator */
      istAngemeldet ?
      <div>Willkommen!</div> :
      <div>Bitte anmelden!</div>
    }

    <Properties
      vorname={vorname}
      nachname={nachname}
      bio={biografie}
    />

    <Listen />

  </>)
}

export default App
