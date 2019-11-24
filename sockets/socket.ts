import { Socket } from 'socket.io';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

export const desconectar = (Cliente: Socket) => {
    Cliente.on('disconnect', ()=> {
        console.log('Cliente Desconectado');
    });
}

export const mesanjes = (Cliente: Socket, io: SocketIO.Server) => {
    Cliente.on('mensaje', (payload:{ de: string, cuerpo: string })=> {
        console.log(payload);
        const payload2 = {
            de: "luis",
            cuerpo: "aaa",
        }
        io.emit('mensaje-response', payload2);
    });

    const payload = {
        de: "Luis",
        cuerpo: "abcdfg",
    }
    io.emit('mensaje-response', payload)
}

