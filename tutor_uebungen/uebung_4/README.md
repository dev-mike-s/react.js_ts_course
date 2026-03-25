# Übung 4

## Aufgabenstellung

### Teil 01
- Erstelle ein neues Projekt mit dem Namen `uebung04`.
- In `App.jsx` ersetze den Rückgabewert durch:

```jsx
<div id="container">
  <header>
    <h1>Handy-Tarifkonfigurator</h1>
  </header>
  <main>
  </main>
</div>
```

- In `App.css` ersetze den existierenden Inhalt durch:

```css
#container {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #122240;
  width: 95%;
  margin: 0 auto;
}
```

## Lösung

### Schritt 1: Projekt erstellen
- Erstelle einen neuen Ordner `uebung04`.

### Schritt 2: `App.jsx` aktualisieren
- Ersetze den Inhalt von `App.jsx` mit:

```jsx
function App() {
  return (
    <div id="container">
      <header>
        <h1>Handy-Tarifkonfigurator</h1>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
```

### Schritt 3: `App.css` aktualisieren
- Ersetze den Inhalt von `App.css` mit dem oben angegebenen Code.
