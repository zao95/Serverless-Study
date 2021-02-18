interface handlerEventType {
    body: string,
    headers: {
        Authorization: string,
        'Content-Type'?: string,
    },
    httpMethod: string,
    isBase64Encoded: false,
    pathParameters: null,
    queryStringParameters: null,
    requestContext: {
        authorizer: {
            principalId: string
        },
        httpMethod: string,
        resourcePath: string,
    },
}
// interface responseType {
//     statusCode: number, 
//     headers: { "Access-Control-Allow-Origin" : string },
//     body: string
// }
module.exports.invoke = async (event: handlerEventType) => {
    console.log("Banana")
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            },
            null,
            2
        ),
    }
}