{% extends '../layout/layout.tpl' %}
{% block body %}
	{% pagelet $id="main" class="index-main"%}
		{% require $id='./index.css' %}

		<div class="p-index">
			<div r-component="c-header" r-data="{animate: refreshing}" r-methods="{onRefresh: onRefresh}">
		    	{% require $id='comps/header' %}
			</div>
			{% pagelet $id="index-posts" class="tableview" $tag="ul" %}
				{% for item in posts %}
				<li>
					{% require $id="comps/post" %}
				</li>
				{% endfor %}
	    	{% endpagelet %}
			{% ATF %}
			<div r-component="c-more" r-methods="{onLoadMore: onLoadMore}" r-ref="more">
	    		{% require $id='comps/more' %}
			</div>
		</div>
		{% script %}
		    __inline('./index.js')
		{% endscript %}
    {% endpagelet %}
{% endblock %}