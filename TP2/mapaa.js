const fs = require('fs').promises;

async function main() {
    try {
       
        const data = await fs.readFile('package.json', 'utf8');
        const packageObj = JSON.parse(data);

        let info = {
            contenidoStr: data,
            contenidoObj: packageObj,
            size: Buffer.byteLength(data, 'utf8') 
        };

        console.log(info);

        await fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));

        console.log('Archivo OK');
    } catch (err) {
        console.error('Error:', err);
    }
}