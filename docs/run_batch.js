import { spawn } from 'child_process';
import * as fs from 'fs';

let dev = false;
let doc;
const args = process.argv;
if (args.pop() === 'dev') {
    dev = true;
}

// console.log('Current directory path: ' + process.cwd());
process.chdir('docs');
// console.log('docs directory path: ' + process.cwd());

// Checking OS and calling correct script accordingly
if (process.platform === 'win32') {
    doc = spawn('makedoc.bat');
} else {
    doc = spawn('Makedoc');
}

doc.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString());
});

doc.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
});

doc.on('exit', function (code) {
    console.log('Doc creation exited with code ' + code.toString());
    if (code === 0 && !dev) {
        // on efface le .venv python
        try {
            console.log('Deleting .venv ...');
            fs.rmSync('.venv', { recursive: true, force: true });
        } catch (e) {
            console.log('Failed to delete .venv', e);
        }
        // on copie les fichiers doc dans public
        try {
            process.chdir('build');
            fs.existsSync('../../public/docs', (error) => {
                if (error) {
                    console.log('Directory public/docs doesnt exist ...');
                    console.log('Creating public/docs ...');
                    fs.mkdir('../../public/docs/html', (err) => console.log(err));
                    fs.mkdir('../../public/docs/pdf', (err) => console.log(err));
                }
            });
            console.log('Copying html and pdf into public ...');
            fs.cp('./html', '../../public/docs/html', { recursive: true }, (err) => { err && console.log('error html', err); });
            fs.cp('./pdf', '../../public/docs/pdf', { recursive: true }, (err) => { err && console.log('error pdf', err); });
        } catch (e) {
            console.log('An error occured', e);
        }
    } else if (code === 0 && dev) {
        // On gardes le .venv
        // on copie les fichiers doc dans public
        try {
            process.chdir('build');
            fs.existsSync('../../public/docs', (error) => {
                if (error) {
                    console.log('Directory public/docs doesnt exist ...');
                    console.log('Creating public/docs ...');
                    fs.mkdir('../../public/docs/html', (err) => console.log(err));
                    fs.mkdir('../../public/docs/pdf', (err) => console.log(err));
                }
            });
            console.log('Copying html and pdf into public ...');
            fs.cp('./html', '../../public/docs/html', { recursive: true }, (err) => { err && console.log('error html', err); });
            fs.cp('./pdf', '../../public/docs/pdf', { recursive: true }, (err) => { err && console.log('error pdf', err); });
        } catch (e) {
            console.log('An error occured', e);
        }
    } else {
        console.log('Exit code gives an error. Check log above for more detail.');
    }
});
