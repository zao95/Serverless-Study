"use strict";
// interface responseType {
//     statusCode: number,
//     headers?: { 'Access-Control-Allow-Origin' : string },
//     body: string
// }
module.exports.invoke = async (event) => {
  console.log("Banana");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
    }),
  };
};
