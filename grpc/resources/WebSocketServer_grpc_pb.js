// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var WebSocketServer_pb = require('./WebSocketServer_pb.js');

function serialize_com_yue_ws_server_broadcastRequest(arg) {
    if (!(arg instanceof WebSocketServer_pb.broadcastRequest)) {
        throw new Error('Expected argument of type com.yue.ws.server.broadcastRequest');
    }
    return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_server_broadcastRequest(buffer_arg) {
    return WebSocketServer_pb.broadcastRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_server_broadcastResponse(arg) {
    if (!(arg instanceof WebSocketServer_pb.broadcastResponse)) {
        throw new Error('Expected argument of type com.yue.ws.server.broadcastResponse');
    }
    return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_server_broadcastResponse(buffer_arg) {
    return WebSocketServer_pb.broadcastResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_server_checkExistRequest(arg) {
    if (!(arg instanceof WebSocketServer_pb.checkExistRequest)) {
        throw new Error('Expected argument of type com.yue.ws.server.checkExistRequest');
    }
    return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_server_checkExistRequest(buffer_arg) {
    return WebSocketServer_pb.checkExistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_server_checkExistResponse(arg) {
    if (!(arg instanceof WebSocketServer_pb.checkExistResponse)) {
        throw new Error('Expected argument of type com.yue.ws.server.checkExistResponse');
    }
    return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_server_checkExistResponse(buffer_arg) {
    return WebSocketServer_pb.checkExistResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_server_sendMsgRequest(arg) {
    if (!(arg instanceof WebSocketServer_pb.sendMsgRequest)) {
        throw new Error('Expected argument of type com.yue.ws.server.sendMsgRequest');
    }
    return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_server_sendMsgRequest(buffer_arg) {
    return WebSocketServer_pb.sendMsgRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_server_sendMsgResponse(arg) {
    if (!(arg instanceof WebSocketServer_pb.sendMsgResponse)) {
        throw new Error('Expected argument of type com.yue.ws.server.sendMsgResponse');
    }
    return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_server_sendMsgResponse(buffer_arg) {
    return WebSocketServer_pb.sendMsgResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WebSocketServerService = exports.WebSocketServerService = {
    sendMsg: {
        path: '/com.yue.ws.server.WebSocketServer/sendMsg',
        requestStream: false,
        responseStream: false,
        requestType: WebSocketServer_pb.sendMsgRequest,
        responseType: WebSocketServer_pb.sendMsgResponse,
        requestSerialize: serialize_com_yue_ws_server_sendMsgRequest,
        requestDeserialize: deserialize_com_yue_ws_server_sendMsgRequest,
        responseSerialize: serialize_com_yue_ws_server_sendMsgResponse,
        responseDeserialize: deserialize_com_yue_ws_server_sendMsgResponse,
    },
    broadcast: {
        path: '/com.yue.ws.server.WebSocketServer/broadcast',
        requestStream: false,
        responseStream: false,
        requestType: WebSocketServer_pb.broadcastRequest,
        responseType: WebSocketServer_pb.broadcastResponse,
        requestSerialize: serialize_com_yue_ws_server_broadcastRequest,
        requestDeserialize: deserialize_com_yue_ws_server_broadcastRequest,
        responseSerialize: serialize_com_yue_ws_server_broadcastResponse,
        responseDeserialize: deserialize_com_yue_ws_server_broadcastResponse,
    },
    checkExist: {
        path: '/com.yue.ws.server.WebSocketServer/checkExist',
        requestStream: false,
        responseStream: false,
        requestType: WebSocketServer_pb.checkExistRequest,
        responseType: WebSocketServer_pb.checkExistResponse,
        requestSerialize: serialize_com_yue_ws_server_checkExistRequest,
        requestDeserialize: deserialize_com_yue_ws_server_checkExistRequest,
        responseSerialize: serialize_com_yue_ws_server_checkExistResponse,
        responseDeserialize: deserialize_com_yue_ws_server_checkExistResponse,
    },
};

exports.WebSocketServerClient = grpc.makeGenericClientConstructor(WebSocketServerService);
