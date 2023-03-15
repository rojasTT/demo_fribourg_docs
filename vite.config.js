import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
    base: './',
    resolve: {
        alias: {
            app: path.resolve(__dirname, './src/')
        }
    },
    server: {
        fs: {
            allow: ['..'] // nécessaire pour que les fonts esri (appelées par le css esri dans _maps) se chargent
        }
    }
});
