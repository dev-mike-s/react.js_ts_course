// src/custom.d.ts
// Allow imports for CSS and asset files so TypeScript doesn't complain

declare module '*.css';
declare module '*.scss';
declare module '*.svg';
declare module '*.png';

declare module '*.jsx' {
  // Deklariert, dass der Standard-Export eine React-Komponente ist.
  import * as React from 'react';
  const content: React.ComponentType<any>;
  export default content;
}