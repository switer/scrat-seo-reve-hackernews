var request = require('request')

var api = 'http://node-hnapi.azurewebsites.net/news'
function getPosts(options, callback, times){
    if (times == undefined) times = 5

    options = options || {}
    if (options.loadmore) api += '2'
    request(api, function (star, resp, body) {
        try {
            body = JSON.parse(body)
        } catch(e) {
            if (times <=0) {
                body = []
            } else {
                times --
                return getDetail(options, callback, times)
            }
        }
        callback(body)
    })
}
module.exports = getPosts;