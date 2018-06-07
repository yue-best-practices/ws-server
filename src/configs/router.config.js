/**
 * Created by yuanjianxin on 2018/4/26.
 */

const routers=[];

const ServiceController =require("../controllers/ServiceController");

/**
 * 发送消息给用户
 */
routers.push({path: '/sendMessage', method: 'post', controller: ServiceController, func: 'sendMessage'});
/**
 * 广播
 */
routers.push({path: '/broadcast', method: 'post', controller: ServiceController, func: 'broadcast'});


module.exports=routers;