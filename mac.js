const fs = require('fs');


fs.readFile('package.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const packageObj = JSON.parse(data);

    let info = {
        contenidoStr: data,
        contenidoObj: packageObj,
        size: Buffer.byteLength(data, 'utf8')
    };

    console.log(info);

   
    fs.writeFile('info.txt', JSON.stringify(info, null, '\t'), (err) => {
        if (err) {
            console.error('Error:', err);
            return;
        }
        console.log('Archivo OK');
    });
});