var request = require('request')

var api = 'http://node-hnapi.azurewebsites.net/news'
module.exports = function(options, callback){
	options = options || {}
	if (options.loadmore) api += '2'
    request(api, function (star, resp, body) {
    	try {
    		body = JSON.parse(body)
    	} catch(e) {
    		body = []
    	}
        callback(body)
    })
};