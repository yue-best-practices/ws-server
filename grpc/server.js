/**
 * Created by yuanjianxin on 2018/7/2.
 */
const grpc = require('grpc');
const services = require('grpc-ws-server-pb').WebSocketServer_grpc_pb;
const server = new grpc.Server();
const methods = require('./methods');
const appConf = require('../src/configs/app.config');
server.addService(
    services.WebSocketServerService,
    methods
);

server.bind(`0.0.0.0:${appConf.port}`, grpc.ServerCredentials.createInsecure());

module.exports = server;