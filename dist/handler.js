"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface responseType {
//     statusCode: number,
//     headers?: { 'Access-Control-Allow-Origin' : string },
//     body: string
// }
module.exports.invoke = async (event) => {
    const reqContext = event.requestContext;
    const method = reqContext.httpMethod.toLowerCase();
    const resource = reqContext.resourcePath;
    const resourceJSPath = resource.replace(/^\//g, '').replace(/\/$/g, '').replace(/\/\{.*?\}/g, '').replace(/\//g, '__').replace('dev__', '');
    const params = { ...event.pathParameters || {}, ...JSON.parse(event.body) || {}, ...event.queryStringParameters || {} };
    const functionModule = await require(`./api/${resourceJSPath}.js`);
    const result = functionModule[method](params);
    return {
        statusCode: 200,
        body: JSON.stringify({
            data: result,
        }),
    };
};
