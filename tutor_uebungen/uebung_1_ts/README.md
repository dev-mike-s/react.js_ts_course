# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Übung 1 (TypeScript): Bücher und mehr

### Aufgabenbeschreibung

#### Teil 01
- Erstelle ein neues Projekt mit dem Namen "uebung1".
- In `App.tsx` ersetze den Rückgabewert durch:
  ```tsx
  <>
    <h1>Bücher und mehr</h1>
  </>
  ```
- In `App.css` ersetze den existierenden Inhalt durch spezifische CSS-Regeln für Layout und Styling.

#### Teil 02
- Erstelle eine neue Funktionskomponente `Main.tsx` und binde sie in `App.tsx` ein.
- Speichere Buch- und Audio-Daten in Konstanten `BOOKS` und `AUDIO`.

#### Teil 03
- Erstelle eine Funktionskomponente `Table.tsx`, die basierend auf den Daten Tabellen erzeugt.
- Binde `Table.tsx` in `Main.tsx` ein.

#### Teil 04
- Erstelle eine Funktionskomponente `TableRow.tsx`, die Zeilen für die Tabellen erzeugt.
- Binde `TableRow.tsx` in `Table.tsx` ein.

#### Zusatzaufgabe
- Jedes zweite `<tr>` in `TableRow.tsx` soll die Klasse `odd` erhalten.
