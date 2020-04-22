const http = require('http');
const app = require('./app');

const normalizePort = val => {
    const port = parseInt(val, 10);

    if(isNaN(port)) {
        return val;
    }

    if(port>=0) {
        return port;
    }else{
        return false;
    }
};

const port = normalizePort(process.env.PORT || 5000);
app.set('port', port);

const errorHandler = error => {
    if(error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address;
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port '+ port;

    switch(error.code) {
        case 'EACCESS': 
            console.log(bind + 'requires elevated priviledges.');
            process.exit(1);
            break;
        
        case 'EADRINUSE': 
            console.log(bind + ' is already in use.');
            process.exit(1);
            break;
        
        default:
            throw error;
    }
};

const server = http.createServer(app);
server.on('error', errorHandler);

server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port '+ port;
    console.log('listening on '+ bind);
});

server.listen(port);
