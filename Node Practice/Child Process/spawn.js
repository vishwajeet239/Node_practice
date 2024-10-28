const { spawn } = require('child_process');

// Use `cmd.exe` on Windows to run the `dir` command
const child = spawn('cmd.exe', ['/c', 'dir']);

child.stdout.on('data', (data) => {
    console.log(`data: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`error: ${data}`);
});

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

child.on('error', (err) => {
    console.error(`Failed to start child process: ${err}`);
});
