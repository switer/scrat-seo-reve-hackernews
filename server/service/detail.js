var request = require('request')

var api = 'http://node-hnapi-eu.herokuapp.com/item'

function getDetail(options, callback, times){
	if (times == undefined) times = 20
	var postid = options.postid
    request(api + '/' + postid, function (star, resp, body) {
    	try {
    		body = JSON.parse(body)
    	} catch(e) {
    		if (times <=0) {
    			body = {}
    		} else {
    			return getDetail(options, callback, times)
    		}
    	}
        callback(body)
    })
};

module.exports = getDetail