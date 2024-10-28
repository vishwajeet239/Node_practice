const {parentPort} = require('worker_threads');

parentPort.postMessage('hello from worker');