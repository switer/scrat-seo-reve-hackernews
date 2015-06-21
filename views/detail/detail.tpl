{% extends '../layout/layout.tpl' %}
{% block body %}
	{% pagelet $id="main" class="detail-main"%}
	<div class="p-detail">
		<div r-component="c-detail-header" r-methods="{onBack: onBack}">
	    	{% require $id='comps/detail-header' r-on="{click: onRefresh}" %}
		</div>
		<div class="content">
			{% require $id='comps/detail' %}
		</div>
		{% pagelet $id="detail-comments" class="comments" $tag="ul" %}
			{% for item in detail.comments %}
			<li>
				{% require $id='comps/comment' %}
			</li>
			{% endfor %}
		{% endpagelet %}
	    {% require $id='./detail.css' %}
	    {% require $id='./detail.js' %}
	</div>
    {% endpagelet %}
{% endblock %}