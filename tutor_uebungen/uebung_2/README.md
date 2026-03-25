# Übung 2

## Aufgabenstellung

### Teil 01
- Erstelle ein neues Projekt mit dem Namen `uebung02`, als Kopie von `uebung01`.
- Ersetze die Funktionskomponente `Main.jsx` durch eine Klassenkomponente mit demselben Namen und derselben Funktionalität.

### Teil 02
- Ersetze die Eigenschaften `books` und `audio` durch die Eigenschaft `products`, mit folgendem Inhalt:

```javascript
[
    {
        'name': 'Bücher',
        'items': [
            {
                'Autor': 'Stephen King',
                'Titel': 'Carrie',
                'Jahr': 1974,
                'Seiten': 199,
                'Verlag': 'Doubleday'
            },
            {
                'Autor': 'Stephen King',
                'Titel': 'The Shining',
                'Jahr': 1977,
                'Seiten': 447,
                'Verlag': 'Doubleday'
            }
        ]
    }
]
```

## Lösung

### Schritt 1: Projekt erstellen
- Kopiere den Ordner `uebung01` und benenne ihn in `uebung02` um.

### Schritt 2: Klassenkomponente erstellen
- Ersetze den Inhalt von `Main.jsx` mit:

```javascript
import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Willkommen zu Übung 2</h1>
            </div>
        );
    }
}

export default Main;
```

### Schritt 3: Produkteigenschaft hinzufügen
- Aktualisiere den State in der Klassenkomponente, um die `products`-Eigenschaft zu verwenden.
