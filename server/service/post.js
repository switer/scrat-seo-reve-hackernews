var request = require('request')

var api = 'http://node-hnapi.azurewebsites.net/news'
function getPosts(options, callback, times){
    if (times == undefined) times = 20

    options = options || {}
    if (options.loadmore) api += '2'
    request({
        url: api,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
        }
    }, function (star, resp, body) {
        try {
            body = JSON.parse(body)
        } catch(e) {
            if (times <=0) {
                body = []
            } else {
                times --
                return getPosts(options, callback, times)
            }
        }
        callback(body)
    })
}
module.exports = getPosts;