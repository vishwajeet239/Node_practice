const { Duplex } = require('stream');

const duplexStream = new Duplex({
  read(size) {
    // Implement read logic
    this.push('data from duplex stream\n');
    this.push(null); // No more data
  },
  write(chunk, encoding, callback) {
    // Implement write logic
    console.log(`Received ${chunk.length} bytes of data: ${chunk.toString()}`);
    callback();
  }
});

duplexStream.on('data', (chunk) => {
  console.log(`Received data: ${chunk.toString()}`);
});

duplexStream.write('Hello');
duplexStream.end();
