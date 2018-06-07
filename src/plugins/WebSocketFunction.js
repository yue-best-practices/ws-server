/**
 * Created by yuanjianxin on 2018/6/6.
 */

const {Crypto}=require('yue-helper');
const {secretKey} = require('../configs/ws.config');

module.exports={


    /**
     * 握手验证方法
     * @param info
     * @returns {boolean}
     */
    verifyFunc(info){

        //todo
        let token=info.req.headers['sec-websocket-protocol'] || null;

        console.log('=====token',token);

        if(!token)
            return false;
        token=Crypto.symmetryDecrypt(secretKey,token);
        if(!token)
            return false;
        token=token.split('|'); // format uid|time|token
        let user_id=token[0];
        if(!user_id)
            return false;
        info.req.headers['X-Client-Id']=user_id;
        return true
    },


    /**
     * 创建链接时方法
     * @param ws
     * @param req
     */
    onConFunc(ws,req){

        //todo

        let user_id=req.headers['X-Client-Id'];
        ws.user_id=user_id;

        // add to ClientsMap
        let list=ClientsMap.has(user_id) && ClientsMap.get(user_id) || [];
        list.push(ws);
        ClientsMap.set(user_id,list);
        console.log(`==新客户端加入！userId:${user_id}, 当前在线用户数:${ClientsMap.size}. ==`);

    },


    /**
     * 接收用户发送消息方法
     * @param data
     * @param ws
     */
    onMsgFunc(data,ws){

        //todo
        console.log('==onMsgFunc:data==',data);
        ws.send('send success');

    },


    /**
     * 用户关闭时触发方法
     * @param ws
     */
    onCloseFunc(ws){

        //todo
        let user_id=ws.user_id;

        // remove from ClientsMap
        let clientList=ClientsMap.has(user_id) && ClientsMap.get(user_id) || [];
        clientList.includes(ws) && (clientList.splice(clientList.indexOf(ws),1));
        clientList.length && ClientsMap.set(user_id,clientList) || ClientsMap.delete(user_id);

        console.log(`==客户端退出!userId:${ws.user_id} ,当前在线用户数:${ClientsMap.size}. ==`)
    },


    /**
     * 客户端异常时触发事件
     * @param ws
     */
    onErrFunc(ws){
        //todo
        console.error(`==客户端异常！userId:${ws.user_id}==`);

        let user_id=ws.user_id;

        // remove from ClientsMap
        let clientList=ClientsMap.has(user_id) && ClientsMap.get(user_id) || [];
        clientList.includes(ws) && (clientList.splice(clientList.indexOf(ws),1));
        clientList.length && ClientsMap.set(user_id,clientList) || ClientsMap.delete(user_id);
    },




};