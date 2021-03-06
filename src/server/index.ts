import http from 'http';
import express from './express';

const port = process.env.PORT || 3000;
const server = http.createServer(express);

server.listen(port);
server.on('error', (e) => {
    console.error('http server listen error\n', e);
});
server.on('listening', () => {
    console.log('server listen, PORT :', port);
});
