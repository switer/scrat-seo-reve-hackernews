'use strict';

require('comps/header')

new Reve({
	el: '.p-index',
	data: {
		loadMore: true,
		refreshing: false
	},
	ready: function () {
		console.log(this.$refs)
	},
	methods: {
		onLoadMore: function (e) {
			var vm = this
			this.$data.loadMore = false
			this.$update()
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
				}
			})
		},
		onRefresh: function (e) {
			e.preventDefault()
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
				}
			})
		}
	}
})