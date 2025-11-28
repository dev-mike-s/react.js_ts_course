import { useState, useEffect } from "react";
import { BASE_URL } from "./assets/baseURL";
import axios from "axios";
import "./App.css";

function App() {
  const [serverdata, setServerdata] = useState([]);

  /* später
  useEffect(() => {
    axios
      .get("http://localhost:3000/games")
      .then((response) => {
        setServerdata(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  */

  return (
    <>
      <form>
        <h3></h3>
        <input type="text" placeholder="Titel" name="titel" />
        <input type="text" placeholder="Jahr" name="jahr" />
        <input type="text" placeholder="Publisher" name="publisher" />
        <input type="text" placeholder="Preis" name="preis" />
        <button></button>
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
        <tbody></tbody>
      </table>
    </>
  );
}

export default App;
