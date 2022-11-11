const prompt = require('prompt-sync')({sigint: true});

const nombre = prompt('Como te llamas ');

let KeepRunning = true;
while(KeepRunning){
    const res = prompt(`Cual es tu respuesta ${nombre}? `);

    if(res === 'exit'){
        console.log('Bye bye ...');
        KeepRunning = false;
    }
}
