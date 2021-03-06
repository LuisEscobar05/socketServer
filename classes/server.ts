import express from 'express';
import { SERVER_PORT, SERVER_HOST } from '../global/enviroment';

import socketIO from 'socket.io'; // Es mi libreria de socket

import * as socket from '../sockets/socket';

import http from 'http';

export default class Server {
    private static _instance: Server;

    public app: express.Application;
    public port: number;
    public host: string;

    public io: socketIO.Server;
    private httServer : http.Server;

    private constructor (){
        this.app = express();
        this.host = SERVER_HOST;
        this.port = SERVER_PORT;

        this.httServer = new http.Server(this.app);
        this.io = socketIO(this.httServer);

        this.escucharScokets()
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private escucharScokets(){
        console.log('Escuchando Conexión');
        this.io.on('connection', cliente => {
            console.log('Cliente Conectado');

            socket.mesanjes(cliente, this.io);

            socket.desconectar(cliente);

        });
    }

    start(callback: Function){
        this.httServer.listen(this.host, this.port, callback());
    }

}