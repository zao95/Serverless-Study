"use strict";
module.exports.invoke = async (event) => {
    console.log("Banana");
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    };
};
