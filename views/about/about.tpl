{% extends '../layout/layout.tpl' %}
{% block body %}
	{% pagelet $id="main" class="about-main"%}
	    {% require $id='./about.css' %}
		<div class="p-about">
			<div r-component="c-secondary-header" r-methods="{onBack: onBack}">
		    	{% require $id='comps/secondary-header' %}
			</div>
			<section class="content">
				<div class="grouped-tableview cf">
					<span id="y-icon"></span>
					<p id="app-desc"><strong>HackerWeb</strong><br>A simply readable Hacker News web app.</p>
				</div>
				<ul class="grouped-tableview grouped-tableview-links">
					<li><a href="https://news.ycombinator.com/" target="_blank" class="disclosure">Hacker News homepage</a></li>
					<li><a href="https://news.ycombinator.com/newsfaq.html" target="_blank" class="disclosure">Hacker News FAQ</a></li>
					<li><a href="https://github.com/switer/scrat-seo-reve-hackernews" target="_blank" class="disclosure">Source Code on GitHub</a></li>
					<li><a href="http://cheeaun.github.io/hackerweb/" target="_blank" class="disclosure">HackerWeb</a></li>
					<li><a href="https://github.com/switer" target="_blank" class="disclosure">Follow @switer</a></li>
				</ul>
				<p class="foot-label">Copy from Lim Chee Aun & built by Switer.<br>Not affiliated with Hacker News or YCombinator.</p>
			</section>
		</div>
		{% ATF %}
		
    {% endpagelet %}
{% endblock %}