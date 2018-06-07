/**
 * Created by yuanjianxin on 2018/6/7.
 */
const BaseController =require("./BaseController");
const AsyncAll=require('yue-asyncall');
module.exports=class ServiceController extends BaseController {


    /**
     * 给用户发送消息
     * userId string | [string]
     * message obj | string | [obj] | [string]
     * @param ctx
     * @param next
     * @returns {Promise.<void>}
     */
    async sendMessage(ctx,next){
        let userId=ctx.$body.userId;

        if(!(userId instanceof Array))
            userId=[userId];

        let message=ctx.$body.message;

        if(!(message instanceof Array))
            message=[message];

        message=message.map(v=>{
           if(typeof v !=='string')
               v=JSON.stringify(v);
           return v;
        });

        let clients=[];
        userId.forEach(v=>{
            ClientsMap.has(v) && clients.push(...ClientsMap.get(v));
        });

        let promiseObj=[];

        clients.forEach(c=>{
           message.forEach(m=>{
               promiseObj.push({ws:c,data:m});
           })
        });

        let promiseList=[];
        promiseObj.forEach(v=>{
            promiseList.push((
                async (v)=>{
                    await v.ws.send(v.data);
                }
            )(v));
        });

        await AsyncAll(promiseList);

        ctx.result={
            code:200,
            message:'OK'
        };

        await next();

    }


    /**
     * 广播消息
     * @param ctx
     * @param next
     * @returns {Promise.<void>}
     */
    async broadcast(ctx,next){

        let message=ctx.$body.message;

        typeof message !=='string' && (message=JSON.stringify(message));

        await ctx.$wsHandler.broadcast(message);

        ctx.result={
            code:200,
            message:'OK'
        };

        await next();
    }

};