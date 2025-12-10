// root/tsconfig.node.json
//
// Umgebung: Server/Node.js:
// Konfiguration für Dateien, die in Node.js laufen, wie z.B. die vite.config.ts oder 
// Test-Dateien, wenn JSDOM genutzt wird.
// docs: https://vite.dev/config/

import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

/** 
 * @returns
 */
export default defineConfig({
  plugins: [react(), tailwindcss()]
})
