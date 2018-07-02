/**
 * Created by yuanjianxin on 2018/7/2.
 */
const messages = require('./resources/WebSocketServer_pb');
const AsyncAll = require('yue-asyncall');
const wsCore = require('yue-ws-core');
const isJSON = (content) => {
    if (typeof content !== 'string')
        return false;
    try {
        let obj = JSON.parse(content);
        return typeof obj === 'object';
    } catch (e) {
        return false;
    }
};

const sendMsg = async(call, callback) => {

    console.log('====sendMsg', call.request);

    let response = new messages.sendMsgResponse();
    let userId = call.request.getUserid();
    let message = call.request.getMessage();

    userId = isJSON(userId) && JSON.parse(userId) || [userId];
    message = isJSON(message) && JSON.parse(message) || [message];

    let clients = [];
    userId.forEach(v => {
        ClientsMap.has(v) && clients.push(...ClientsMap.get(v));
    });

    let promiseObj = [];

    clients.forEach(c => {
        message.forEach(m => {
            promiseObj.push({ws: c, data: m});
        })
    });

    let promiseList = [];
    promiseObj.forEach(v => {
        promiseList.push((async(v) => {
            await v.ws.send(v.data);
        })(v));
    });

    await AsyncAll(promiseList);

    response.setResult(true);

    callback(null, response);
};

const broadcast = (call, callback) => {
    let response = new messages.broadcastResponse();
    let message = call.request.getMessage();
    wsCore.instance.broadcast(message);
    response.setResult(true);
    callback(null, response);
};


const checkExist = (call, callback) => {
    let response = new messages.checkExistResponse();
    let userId = call.request.getUserid();
    let result = ClientsMap.has(userId);
    response.setResult(result);
    callback(null, response);
};

module.exports = {
    sendMsg,
    broadcast,
    checkExist
};