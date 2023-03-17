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
            allow: [ // il faut autoriser vite à chercher des fichiers dans un autre répertoire. Nécessaire pour que les fonts esri (appelées par le css esri dans _maps) se chargent
                '../../../Develop/_maps_esm',
                '..'
            ]
        }
    }
});
