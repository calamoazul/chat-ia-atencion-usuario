import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/// 
export default defineConfig({
      esbuild: {
        loader: "tsx",
        include: [
          // Business as usual for .jsx and .tsx files
          "src/**/*.jsx",
          "src/**/*.tsx",
          "node_modules/**/*.jsx",
          "node_modules/**/*.tsx",
    
          // Add the specific files you want to allow JSX syntax in
          "src/LocalJsxInJsComponent.js",
          "node_modules/bad-jsx-in-js-component/js/BadJSXinJS.js",
          "node_modules/bad-jsx-in-js-component/ts/BadTSXInTs.ts",
    
          // --- OR ---
    
          // Add these lines to allow all .js files to contain JSX
          "src/**/*.js",
          "node_modules/**/*.js",
    
        ],
      },
      plugins: [
        react()
      ],
      resolve:{
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      server: {
        host: '0.0.0.0',
        port: 3000,
      }
    }) 
