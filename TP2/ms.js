const fs = require('fs');

try {
   
    const packageJson = fs.readFileSync('package.json', 'utf8');

    
    const packageObj = JSON.parse(packageJson);

    
    let info = {
        contenidoStr: packageJson,
        contenidoObj: packageObj,
        size: Buffer.byteLength(packageJson, 'utf8') 
    };

    
    console.log(info);

    
    fs.writeFileSync('info.txt', JSON.stringify(info));
    console.log('Archivo ok');

} catch (err) {
    console.error('Error:', err);
}