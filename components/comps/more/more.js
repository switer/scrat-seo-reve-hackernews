'use strict';

module.exports = Reve.component('c-more', {
	data: function () {
		return {
			show: true,
		}
	},
	methods: {
		show: function () {
			this.$data.show = true
			this.$update()
		},
		hide: function () {
			this.$data.show = false
			this.$update()
		},
		onLoadMore: function () {}
	}
})