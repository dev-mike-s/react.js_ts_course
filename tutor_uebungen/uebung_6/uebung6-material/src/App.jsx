import { useState, useEffect, useRef } from "react";
import { BASE_URL } from "./assets/baseURL";
import axios from "axios";
import "./App.css";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { createTheme, ThemeProvider, colors } from "@mui/material";

const THEME = createTheme({
  typography: {
    h3: {
      fontSize: "1.5rem",
    },
  },
  palette: {
    primary: {
      main: colors.pink[300],
    },
  },
});

function App() {
  // Spiele-State
  const [spiele, setzeSpiele] = useState([]);

  const LEERES_FORMULAR = {
    titel: "",
    jahr: "",
    publisher: "",
    preis: "",
  };

  // Formular-State
  const [formular, setzeFormular] = useState({
    ...LEERES_FORMULAR,
  });
  const eingabe = (e) => {
    setzeFormular((c) => {
      return {
        ...c,
        [e.target.name]: e.target.value,
      };
    });
  };

  // Bearbeiten-Modus-State
  const [bearbeitenAktiv, setzeBearbeitenAktiv] = useState(false);

  const GEWAEHLTES_SPIEL = useRef(null);
  // Bearbeiten-Modus ändern Funktion
  const bearbeitenAktivieren = (spiel) => {
    if (bearbeitenAktiv) {
      // deaktivieren
      GEWAEHLTES_SPIEL.current = null;

      // Formular leeren
      setzeFormular({
        ...LEERES_FORMULAR,
      });
      setzeBearbeitenAktiv(false);
    } else {
      // aktivieren
      // Spiel speichern
      GEWAEHLTES_SPIEL.current = spiel;

      // Formular füllen
      setzeFormular({
        titel: spiel.titel,
        jahr: spiel.jahr,
        publisher: spiel.publisher,
        preis: spiel.preis,
      });
      setzeBearbeitenAktiv(true);
    }
  };

  // Spiele laden
  useEffect(() => {
    axios.get(`${BASE_URL}/spiele`).then((res) => {
      setzeSpiele(res.data);
    });
  }, []);

  // Spiel löschen
  const loescheSpiel = (id) => {
    axios.delete(`${BASE_URL}/spiele/${id}`).then(() => {
      setzeSpiele((c) => {
        return c.filter((ele) => {
          return ele.id != id;
        });
      });
    });
  };
  /*
  useEffect(() => {
    console.log(spiele)
  }, [spiele])
  */

  // Spiel speichern
  const spielSpeichern = () => {
    const SPIEL = {
      titel: formular.titel,
      jahr: Number(formular.jahr),
      publisher: formular.publisher,
      preis: Number(formular.preis),
    };
    if (bearbeitenAktiv) {
      // bearbeiten
      axios
        .put(`${BASE_URL}/spiele/${GEWAEHLTES_SPIEL.current.id}`, SPIEL)
        .then((res) => {
          setzeSpiele((cur) => {
            return cur.map((ele) => {
              return GEWAEHLTES_SPIEL.current.id === ele.id ? res.data : ele;
            });
          });
          // Formular leeren
          setzeFormular({ ...LEERES_FORMULAR });
          // Bearbeiten deaktivieren
          setzeBearbeitenAktiv(false);
        });
    } else {
      // neu
      axios.post(`${BASE_URL}/spiele`, SPIEL).then((res) => {
        setzeSpiele((c) => {
          return [...c, res.data];
        });
      });
      // Formular leeren
      setzeFormular({ ...LEERES_FORMULAR });
    }
  };

  return (
    <ThemeProvider theme={THEME}>
      <Box sx={{ maxWidth: "250px" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Typography variant="h3">
            {bearbeitenAktiv ? "Artikel bearbeiten" : "Neuer Artikel"}
          </Typography>
          <Stack spacing={2}>
            <TextField
              type="text"
              placeholder="Titel"
              name="titel"
              value={formular.titel}
              onChange={eingabe}
              variant="standard"
              size="small"
            />
            <TextField
              type="text"
              placeholder="Jahr"
              name="jahr"
              value={formular.jahr}
              onChange={eingabe}
              variant="standard"
              size="small"
            />
            <TextField
              type="text"
              placeholder="Publisher"
              name="publisher"
              value={formular.publisher}
              onChange={eingabe}
              variant="standard"
              size="small"
            />
            <TextField
              type="text"
              placeholder="Preis"
              name="preis"
              value={formular.preis}
              onChange={eingabe}
              variant="standard"
              size="small"
            />
            <Button
              variant="contained"
              onClick={spielSpeichern}
              disabled={
                !formular.titel ||
                !formular.jahr ||
                isNaN(formular.jahr) ||
                !formular.publisher ||
                !formular.preis ||
                isNaN(formular.preis)
              }
            >
              {bearbeitenAktiv ? "Bearbeiten" : "Hinzufügen"}
            </Button>
          </Stack>
        </form>
      </Box>
      <Box sx={{ maxWidth: "90%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Titel</TableCell>
              <TableCell>Jahr</TableCell>
              <TableCell>Publisher</TableCell>
              <TableCell>Preis</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spiele.map((ele) => {
              // ele = Objekt
              return (
                <TableRow key={ele.id}>
                  <TableCell>{ele.titel}</TableCell>
                  <TableCell>{ele.jahr}</TableCell>
                  <TableCell>{ele.publisher}</TableCell>
                  <TableCell>{ele.preis} EUR</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        bearbeitenAktivieren(ele);
                      }}
                    >
                      {bearbeitenAktiv
                        ? '"Bearbeiten" deaktivieren'
                        : '"Bearbeiten" aktivieren'}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        loescheSpiel(ele.id);
                      }}
                    >
                      Löschen
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </ThemeProvider>
  );
}

export default App;
