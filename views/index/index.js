'use strict';

require('comps/header')

new Reve({
	el: '.p-index',
	data: {},
	ready: function () {
		console.log(this.$refs)
	},
	methods: {
		onRefresher: function (e) {
			e.preventDefault()
			location.reload()
		}
	}
})