'use strict';

require('comps/header')
require('comps/more')

new Reve({
	el: '.p-index',
	data: {
		refreshing: false
	},
	methods: {
		onLoadMore: function (e) {
			var $more = this.$refs.more
			var vm = this

			$more.hide()
			pagelet.load({
				url: '/p/index?_fetch_more=1',
				pagelets: ['layout.main.index-posts'],
				success: function (resp) {
					var f = vm.$compile(resp.html['layout.main.index-posts'])
					var $con = vm.$el.querySelector('.tableview')
					var $last = [].slice.call($con.querySelectorAll('li .number')).pop()
					var lastNumber = ~~$last.innerText
					;[].slice.call(f.querySelectorAll('li .number')).forEach(function (t) {
						t.innerText = lastNumber + parseInt(t.innerText)
					})
					$con.appendChild(f)
					$more.show()
				},
				error: function () {
					$more.hide()
				}
			})
		},
		onRefresh: function (e) {
			this.$data.refreshing = true
			this.$update()
			var vm = this
			pagelet.load({
				url: '/p/index',
				pagelets: ['layout.main.index-posts'],
				success: function (resp) {
					var f = vm.$compile(resp.html['layout.main.index-posts'])
					var $con = vm.$el.querySelector('.tableview')
					$con.innerHTML = ''
					$con.appendChild(f)
					vm.$data.refreshing = false
					vm.$update()
				},
				error: function () {
					vm.$data.refreshing = false
					vm.$update()
				}
			})
		}
	}
})