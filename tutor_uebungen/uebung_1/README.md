# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Übung 1: Bücher und mehr

### Aufgabenbeschreibung

#### Teil 01
- Erstelle ein neues Projekt mit dem Namen "uebung1".
- In `App.jsx` ersetze den Rückgabewert durch:
  ```jsx
  <>
    <h1>Bücher und mehr</h1>
  </>
  ```
- In `App.css` ersetze den existierenden Inhalt durch spezifische CSS-Regeln für Layout und Styling.

#### Teil 02
- Erstelle eine neue Funktionskomponente `Main.jsx` und binde sie in `App.jsx` ein.
- Speichere Buch- und Audio-Daten in Konstanten `BOOKS` und `AUDIO`.

#### Teil 03
- Erstelle eine Funktionskomponente `Table.jsx`, die basierend auf den Daten Tabellen erzeugt.
- Binde `Table.jsx` in `Main.jsx` ein.

#### Teil 04
- Erstelle eine Funktionskomponente `TableRow.jsx`, die Zeilen für die Tabellen erzeugt.
- Binde `TableRow.jsx` in `Table.jsx` ein.

#### Zusatzaufgabe
- Jedes zweite `<tr>` in `TableRow.jsx` soll die Klasse `odd` erhalten.
