import { paramsType } from './types/common'

interface handlerEventType {
    body: string,
    headers: {
        Authorization: string,
        'Content-Type'?: string,
        'User-Agent'?: string,
        Accept: string,
        'Postman-Token'?: string,
        Host: string,
        'Accept-Encoding'?: string,
        Connection: string,
        'Content-Length'?: string,
    },
    httpMethod: string,
    isBase64Encoded: false,
    pathParameters: null,
    queryStringParameters: null,
    requestContext: {
        authorizer: {
            principalId: string,
        },
        httpMethod: string,
        resourcePath: string,
    },
}
// interface responseType {
//     statusCode: number,
//     headers?: { 'Access-Control-Allow-Origin' : string },
//     body: string
// }


module.exports.invoke = async (event: handlerEventType) => {
    const reqContext = event.requestContext
    const method = reqContext.httpMethod.toLowerCase()
    const resource = reqContext.resourcePath
    const resourceJSPath = resource.replace(/^\//g, '').replace(/\/$/g, '').replace(/\/\{.*?\}/g, '').replace(/\//g, '__').replace('dev__', '')
    const params: paramsType = {...event.pathParameters || {}, ...JSON.parse(event.body) || {}, ...event.queryStringParameters || {}}

    const functionModule = await require(`./api/${resourceJSPath}.js`)
    const result = functionModule[method](params)
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                data: result,
            },
        ),
    }
}