"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectar = (Cliente) => {
    Cliente.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });
};
exports.mesanjes = (Cliente, io) => {
    Cliente.on('mensaje', (payload) => {
        console.log(payload);
        const payload2 = {
            de: "luis",
            cuerpo: "aaa",
        };
        io.emit('mensaje-response', payload2);
    });
    const payload = {
        de: "Luis",
        cuerpo: "abcdfg",
    };
    io.emit('mensaje-response', payload);
};
