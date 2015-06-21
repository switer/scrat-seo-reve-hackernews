var request = require('request')

module.exports = function(postid, callback){
    request('http://node-hnapi-eu.herokuapp.com/item/9751858?'+postid, function (star, resp, body) {
        callback(JSON.parse(body))
    })
};