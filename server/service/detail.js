var request = require('request')

var api = 'http://node-hnapi-eu.herokuapp.com/item'
module.exports = function(options, callback){
	var postid = options.postid
    request(api + '/' + postid, function (star, resp, body) {
    	try {
    		body = JSON.parse(body)
    	} catch(e) {
    		body = {}
    	}
        callback(body)
    })
};