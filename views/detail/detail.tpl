{% extends '../layout/layout.tpl' %}
{% block body %}
	{% pagelet $id="main" class="detail-main"%}
	    {% require $id='./detail.css' %}
		<div class="p-detail">
			<div r-component="c-secondary-header">
		    	{% require $id='comps/secondary-header' %}
			</div>
			<div class="content">
				{% require $id='comps/detail' %}
			</div>
			{% ATF %}
			{% pagelet $id="detail-comments" class="comments" $tag="ul" %}
				{% for item in detail.comments %}
				<li>
					{% require $id='comps/comment' %}
				</li>
				{% endfor %}
			{% endpagelet %}
		</div>
		{% script %}
			__inline('./detail.js')
		{% endscript %}
    {% endpagelet %}
{% endblock %}