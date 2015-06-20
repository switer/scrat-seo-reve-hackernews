{% require $id="./header.js" %}

<div class="c-header">
	<a href="/p/about" class="c-header-button" style="left: 0">
		<button>About</button>
	</a>
	<h1>{{ headerTitle }}</h1>
	<a href="javascritp:;" class="c-header-button" style="right: 0"
		r-on="{click: onRefresh}"
	>
		<button>
			<i class="refresher"></i>
		</button>
	</a>
</div>