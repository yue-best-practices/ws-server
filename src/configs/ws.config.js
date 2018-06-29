/**
 * Created by yuanjianxin on 2018/6/6.
 */

module.exports={

    port: process.env.WS_PORT || 5000,
    heartBeatCommand:'PING',

    secretKey:'Yue.',// ws 握手时解密token 的密钥
};