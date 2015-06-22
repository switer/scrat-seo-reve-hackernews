{% extends '../layout/layout.tpl' %}
{% block body %}
	{% pagelet $id="main" class="index-main"%}
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
    	<a class="more" href="javascript:;" 
    		r-on="{click: onLoadMore}" 
    		r-style="{visibility: loadMore ? 'visible' : 'hidden'}">
    		More...
    	</a>
	    {% require $id='./index.css' %}
	</div>
	{% script %}
	    __inline('./index.js')
	{% endscript %}
    {% endpagelet %}
{% endblock %}