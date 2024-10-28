const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    // Transform data (convert to uppercase)
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);
