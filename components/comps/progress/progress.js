'use strict';

module.exports = Reve.component('c-progress', {
    data: function () {
        return {
            show: false,
            innerWidth: '0%'
        }
    },
    ready: function () {

        var timer, last
        var vm = this

        pagelet.on(pagelet.EVENT_BEFORE_LOAD, function(){
            last = Date.now();
            vm.$data.show = true
            vm.$update()
            clearTimeout(timer);
        });

        pagelet.on(pagelet.EVENT_LOAD_PROGRESS, function(data){
            var e = data.event;
            var percent = e.loaded / e.total * 100;
            vm.$data.innerWidth = percent + '%'
            vm.$update()
        });

        pagelet.on(pagelet.EVENT_LOAD_COMPLETED, function(){
            vm.$data.innerWidth = '100%'
            vm.$update()

            var delay = 200;
            var delta = Date.now() - last;
            if(delta < 300){
                delay += 300 - delta;
            }
            timer = setTimeout(function(){
                vm.$data.show = false
                vm.$data.innerWidth = '0%'
                vm.$update()
            }, delay);
        });
    },
    methods: {

    }
})
