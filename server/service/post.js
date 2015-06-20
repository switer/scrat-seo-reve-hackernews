var request = require('request')

module.exports = function(callback){
    request('http://node-hnapi.azurewebsites.net/news', function (star, resp, body) {
        callback(JSON.parse(body))
    })
};