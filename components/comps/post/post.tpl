<div class="c-post">
	<a href="{{item.url}}" class="detail">
		<div class="number">{{ loop.index }}</div>
		<div class="story">
			<b>{{ item.title }}</b>
			<span class="metadata">
				<span class="link-text">
					{{item.url | replace("http[s]*://", "", "g")}}
				</span>
				<br />
				<span class="inline-block">{{item.points}} points by {{item.user}}</span>
				<span class="inline-block">{{item.time_ago}} . {{item.comments_count}} comments</span>
			</span>
		</div>
	</a>
	<a href="/p/detail?id={{item.id}}" class="comment">
		<i></i>
	</a>
</div>