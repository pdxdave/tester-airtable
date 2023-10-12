exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: 'Our First Netlify Function Example',
    }
}
// domain/.netlify/functions/1-hello
// exports says we are exporting from this file
// handler is a method that runs until execution is completed
// return is a promise therefore no use of await
// event has info about incoming info