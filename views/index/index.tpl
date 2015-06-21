{% extends '../layout/layout.tpl' %}
{% block body %}
	{% pagelet $id="main" class="index-main"%}
	<div class="p-index">
		<div r-component="c-header" r-methods="{onRefresh: onRefresher}">
	    	{% require $id='comps/header' r-on="{click: onRefresh}" %}
		</div>
		{% pagelet $id="index-posts" class="tableview" $tag="ul" %}
			{% for item in posts %}
			<li>
				{% require $id="comps/post" %}
			</li>
			{% endfor %}
    	{% endpagelet %}
    	<a class="more" href="javascript:;" r-on="{click: onLoadMore}" r-show="{loadMore}">
    		More...
    	</a>
	    {% require $id='./index.css' %}
	    {% require $id='./index.js' %}
	</div>
    {% endpagelet %}
{% endblock %}