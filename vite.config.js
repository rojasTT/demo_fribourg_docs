import fs from 'fs';
import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    resolve: {
        alias: {
            app: path.resolve(__dirname, './src/')
        }
    },
    server: {
        host: 'dev.topomat.local',
        https: {
            key: fs.readFileSync('../../.cert/key.pem'),
            cert: fs.readFileSync('../../.cert/cert.pem'),
        },
        fs: {
            allow: [ // il faut autoriser vite à chercher des fichiers dans un autre répertoire. Nécessaire pour que les fonts esri (appelées par le css esri dans _maps) se chargent
                '../../_maps',
                '..'
            ]
        }
    }
});
