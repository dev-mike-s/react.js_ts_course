// @ts-check
// Simple JS example (copyable) showing how to get lightweight type hints with JSDoc
// TypeScript users should keep `src/types.ts` as the single source of truth.

/**
 * @typedef {Object} HelloWorld
 * @property {string} name
 */

/** @type {HelloWorld} */
const hello = { name: 'Hello World!' };

// Render a small element into the page so you can see it in the browser.
// This file is plain JS — editors that support // @ts-check (VS Code) will
// show type hints and basic checking based on the typedef above.

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('h1');
  el.textContent = hello.name;
  el.className = 'text-3xl font-bold underline';
  document.body.appendChild(el);
});
