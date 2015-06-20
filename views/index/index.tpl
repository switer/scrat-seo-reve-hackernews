{% extends '../layout/layout.tpl' %}
{% block body %}
	<div class="p-index">
		<div r-component="c-header" r-methods="{onRefresh: onRefresher}">
	    	{% require $id='comps/header' r-on="{click: onRefresh}" %}
		</div>
	    {% pagelet $id="main" class="index-main"%}

	    {% endpagelet %}
	    {% require $id='./index.css' %}
	    {% require $id='./index.js' %}
	</div>
{% endblock %}