import { useState, useEffect, useRef } from 'react'
import { BASE_URL } from './assets/baseURL'
import axios from 'axios'
import './App.css'
import { use } from 'react'

function App() {

  // Spiele-State
  const [spiele, setzeSpiele] = useState([])

  const LEERES_FORMULAR = {
    "titel": "",
    "jahr": "",
    "publisher": "",
    "preis": ""
  }
  // Formular-State
  const [formular, setzeFormular] = useState({
    ...LEERES_FORMULAR
  })
  const eingabe = (e) => {
    setzeFormular((c) => {
      return {
        ...c,
        [e.target.name]: e.target.value
      }
    })
  }

  // Bearbeiten-Modus-State
  const [bearbeitenAktiv, setzeBearbeitenAktiv] = useState(false)

  const GEWAEHLTES_SPIEL = useRef(null)
  // Bearbeiten-Modus ändern Funktion
  const bearbeitenAktivieren = (spiel) => {
    if (bearbeitenAktiv) { // deaktivieren
      GEWAEHLTES_SPIEL.current = null
      // Formular leeren
      setzeFormular({
        ...LEERES_FORMULAR
      })
      setzeBearbeitenAktiv(false)
    } else { // aktivieren
      // Spiel speichern
      GEWAEHLTES_SPIEL.current = spiel
      // Formular füllen
      setzeFormular({
        "titel": spiel.titel,
        "jahr": spiel.jahr,
        "publisher": spiel.publisher,
        "preis": spiel.preis
      })
      setzeBearbeitenAktiv(true)
    }
  }

  // Spiele laden
  useEffect(() => {
    axios.get(`${BASE_URL}/spiele`)
      .then((res) => {
        setzeSpiele(res.data)
      })
  }, [])

  // Spiel löschen
  const loescheSpiel = (id) => {
    axios.delete(`${BASE_URL}/spiele/${id}`)
      .then(() => {
        setzeSpiele((c) => {
          return c.filter((ele) => {
            return ele.id != id
          })
        })
      })
  }
  /*
  useEffect(() => {
    console.log(spiele)
  }, [spiele])
  */

  // Spiel speichern
  const spielSpeichern = () => {
    const SPIEL = {
      "titel": formular.titel,
      "jahr": Number(formular.jahr),
      "publisher": formular.publisher,
      "preis": Number(formular.preis)
    }

    if (bearbeitenAktiv) {
      // bearbeiten
      axios.put(`${BASE_URL}/spiele/${GEWAEHLTES_SPIEL.current.id}`, SPIEL)
        .then((res) => {
          setzeSpiele((c) => {
            return c.map((ele) => {
              return ele.id === GEWAEHLTES_SPIEL.current.id ? res.data : ele
            })
          })
          setzeBearbeitenAktiv(false)
        })
    } else {
      // neu
      axios.post(`${BASE_URL}/spiele`, SPIEL)
        .then((res) => {
          setzeSpiele((c) => {
            return [...c, res.data]
          })
        })
    }

    // Formular leeren
    setzeFormular({
      ...LEERES_FORMULAR
    })

  }

  return (
    <>
      <form onSubmit={(e) => { e.preventDefault() }}>
        <h3>{
          bearbeitenAktiv ?
            "Artikel bearbeiten" :
            "Neuer Artikel"
        }</h3>
        <input type="text" placeholder="Titel" name="titel"
          value={formular.titel} onChange={eingabe} />
        <input type="text" placeholder="Jahr" name="jahr"
          value={formular.jahr} onChange={eingabe} />
        <input type="text" placeholder="Publisher" name="publisher"
          value={formular.publisher} onChange={eingabe} />
        <input type="text" placeholder="Preis" name="preis"
          value={formular.preis} onChange={eingabe} />
        <button onClick={spielSpeichern} disabled={
          !formular.titel ||
          !formular.jahr || isNaN(formular.jahr) ||
          !formular.publisher ||
          !formular.preis || isNaN(formular.preis)
        }>{
            bearbeitenAktiv ?
              "Bearbeiten" :
              "Hinzufügen"
          }</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Jahr</th>
            <th>Publisher</th>
            <th>Preis</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            spiele.map((ele) => {
              // ele = Objekt
              return (<tr key={ele.id}>
                <td>{ele.titel}</td>
                <td>{ele.jahr}</td>
                <td>{ele.publisher}</td>
                <td>{ele.preis} EUR</td>
                <td onClick={() => {
                  bearbeitenAktivieren(ele)
                }}>{
                    bearbeitenAktiv ?
                      '"Bearbeiten" deaktivieren' :
                      '"Bearbeiten" aktivieren'
                  }</td>
                <td onClick={() => {
                  loescheSpiel(ele.id)
                }}>Löschen</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
