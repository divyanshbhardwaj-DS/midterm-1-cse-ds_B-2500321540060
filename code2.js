const fs = require('fs');

// CREATE
fs.writeFile('myfile.txt', 'Hello, this is my file!', (err) => {
    if (err) throw err;
    console.log('File created successfully!');

    // READ
    fs.readFile('myfile.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File Content:', data);

        // UPDATE
        fs.appendFile('myfile.txt', ' Updated content added!', (err) => {
            if (err) throw err;
            console.log('File updated successfully!');

            // READ UPDATED CONTENT
            fs.readFile('myfile.txt', 'utf8', (err, updatedData) => {
                if (err) throw err;
                console.log('Updated Content:', updatedData);

                // DELETE
                fs.unlink('myfile.txt', (err) => {
                    if (err) throw err;
                    console.log('File deleted successfully!');
                });
            });
        });
    });
});