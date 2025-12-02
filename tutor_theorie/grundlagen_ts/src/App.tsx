import type { JSX } from 'react'
import './App.css'
import EventsFunktion from './components/events/EventsFunktion'
import EventsKlasse from './components/events/EventsKlasse'
import Listen from './components/lists/Listen'
import PropsElter from './components/methodsprops/PropsElter'
import Properties from './components/props/Properties'
import StateFunktion from './components/state/StateFunktion'
import StateFunktionArray from './components/state/StateFunktionArray'
import StateFunktionObjekt from './components/state/StateFunktionObjekt'
import StateKlasse from './components/state/StateKlasse'
import StateKlasseArray from './components/state/StateKlasseArray'
import StateKlasseObjekt from './components/state/StateKlasseObjekt'

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

      <EventsFunktion />
      <EventsKlasse />

      <PropsElter />

      <StateKlasse />
      <StateKlasseArray />
      <StateKlasseObjekt />

      <StateFunktion />
      <StateFunktionArray />
      <StateFunktionObjekt />

    </>)
}

export default App
