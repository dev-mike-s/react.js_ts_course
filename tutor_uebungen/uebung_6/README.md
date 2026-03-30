# Übung 6

## Aufgabenstellung

### Teil 01
- Erstelle ein neues Projekt mit dem Namen `uebung6`.
- In `App.jsx` ersetze den Rückgabewert durch:

```jsx
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
    <tbody>
    </tbody>
  </table>
</>
```

- In `App.css` ersetze den existierenden Inhalt durch:

```css
body {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  width: 95%;
  color: #122240;
  margin: 0 auto;
}
form input, form button {
  display: block;
  margin: 5px 0;
}
button {
  border: 1px solid#284c94;
}
```

## Lösung

### Schritt 1: Projekt erstellen
- Erstelle einen neuen Ordner `uebung6`.

### Schritt 2: `App.jsx` aktualisieren
- Ersetze den Inhalt von `App.jsx` mit dem oben angegebenen Code.

### Schritt 3: `App.css` aktualisieren
- Ersetze den Inhalt von `App.css` mit dem oben angegebenen Code.