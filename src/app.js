/**
 * Created by yuanjianxin on 2018/5/9.
 */

global.ClientsMap=new Map();

const App=require('yue-web-app-core');
const appConf=require('./configs/app.config');
const routerConf=require('./configs/router.config');


// init ws core
const wsConf=require('./configs/ws.config');
const WebSocketFunction=require('./plugins/WebSocketFunction');
const wsCore=require('yue-ws-core');
wsCore.instance.config(Object.assign({},wsConf,WebSocketFunction));
wsCore.instance.run();


const app=new App();
app.Middleware = appConf.globalMiddlewareConf;
app.Body=appConf.bodyConf;
app.Routes=routerConf;
app.Port=appConf.port;
app.run();