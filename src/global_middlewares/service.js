/**
 * Created by yuanjianxin on 2018/4/26.
 */

const wsCore=require('yue-ws-core');
module.exports = () => {

    return async(ctx, next) => {

        ctx.$wsHandler=wsCore.instance;

        await next();

    }
};