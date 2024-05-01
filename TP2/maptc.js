const fs = require('fs').promises;

fs.readFile('package.json', 'utf8')
    .then(data => {
        
        const packageObj = JSON.parse(data);

        
        let info = {
            contenidoStr: data,
            contenidoObj: packageObj,
            size: Buffer.byteLength(data, 'utf8') 
        };

        
        console.log(info);

        
        return fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));
    })
    .then(() => {
        console.log('Archivo ok');
    })
    .catch(err => {
        console.error('Error:', err);
    });