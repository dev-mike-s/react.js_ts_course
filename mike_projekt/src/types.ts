// root/src/types.ts

/** 
 * Centralisation of the types globally
 * 
 * @returns type1, type2, ...
 * 
 * @docs    https://react.dev/learn/typescript
 */

export interface HelloWorld {
    name: string
}

// JS (JSDoc) usage template
// If you prefer a plain-JS file with type hints, add this to a `.js` file
// (for editors that understand JSDoc / `// @ts-check`):
//
// // @ts-check
// /**
//  * @typedef {Object} HelloWorld
//  * @property {string} name
//  */
//
// /** @type {HelloWorld} */
// // const hello = { name: 'Hello World!' };
//
// This keeps the single source-of-truth in `src/types.ts` while providing
// a minimal JS-friendly template developers can copy into `.js` files.