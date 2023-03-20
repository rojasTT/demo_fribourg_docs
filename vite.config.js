import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import * as path from 'path';

export default defineConfig({
    base: './',
    resolve: {
        alias: {
            app: path.resolve(__dirname, './src/')
        }
    },
    server: {
        host: 'dev.topomat.local',
        fs: {
            allow: [ // il faut autoriser vite à chercher des fichiers dans un autre répertoire. Nécessaire pour que les fonts esri (appelées par le css esri dans _maps) se chargent
                '../../../Develop/_maps_esm',
                '..'
            ]
        }
    },
    plugins: [mkcert({
        hosts: ['dev.topomat.local']
    })]
});
