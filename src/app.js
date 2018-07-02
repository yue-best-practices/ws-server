/**
 * Created by yuanjianxin on 2018/5/9.
 */

global.ClientsMap=new Map();

// init ws core
const wsConf=require('./configs/ws.config');
const WebSocketFunction=require('./plugins/WebSocketFunction');
const wsCore=require('yue-ws-core');
wsCore.instance.config(Object.assign({},wsConf,WebSocketFunction));
wsCore.instance.run();

// grpc server

const server = require('../grpc/server');

server.start((err, data) => {
    console.error('====grpc err===', err);
    console.log('====data===', data);
});
