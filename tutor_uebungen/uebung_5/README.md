# Übung 5

## Aufgabenstellung

### Teil 01
- Erstelle ein neues Projekt mit dem Namen `uebung5`.
- In `App.jsx` ersetze den Rückgabewert durch:

```jsx
<div id="container">
  <header>
    <h1>Bücher und Mehr</h1>
  </header>
  <nav className="clearfix">
    <div>Shop</div>
    <div>Warenkorb ()</div>
  </nav>
  <main>
  </main>
</div>
```

- In `App.css` ersetze den existierenden Inhalt durch:

```css
#container {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  width: 95%;
  color: #122240;
  margin: 0 auto;
}
```

## Lösung

### Schritt 1: Projekt erstellen
- Erstelle einen neuen Ordner `uebung5`.

### Schritt 2: `App.jsx` aktualisieren
- Ersetze den Inhalt von `App.jsx` mit:

```jsx
function App() {
  return (
    <div id="container">
      <header>
        <h1>Bücher und Mehr</h1>
      </header>
      <nav className="clearfix">
        <div>Shop</div>
        <div>Warenkorb ()</div>
      </nav>
      <main>
      </main>
    </div>
  );
}

export default App;
```

### Schritt 3: `App.css` aktualisieren
- Ersetze den Inhalt von `App.css` mit dem oben angegebenen Code.
