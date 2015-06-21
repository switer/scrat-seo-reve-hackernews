{% extends '../layout/layout.tpl' %}
{% block body %}
	{% pagelet $id="main" class="about-main"%}
	<div class="p-about">
		<div r-component="c-secondary-header" r-methods="{onBack: onBack}">
	    	{% require $id='comps/secondary-header' r-on="{click: onRefresh}" %}
		</div>
		<section class="content">
			<div class="grouped-tableview cf">
				<span id="y-icon"></span>
				<p id="app-desc"><strong>HackerWeb</strong><br>A simply readable Hacker News web app.</p>
			</div>
			<ul class="grouped-tableview grouped-tableview-links">
				<li><a href="http://hackerwebapp.com/" target="_blank" class="disclosure">HackerWeb homepage</a></li>
				<li><a href="https://news.ycombinator.com/" target="_blank" class="disclosure">Hacker News homepage</a></li>
				<li><a href="https://news.ycombinator.com/newsfaq.html" target="_blank" class="disclosure">Hacker News FAQ</a></li>
				<li><a href="https://github.com/cheeaun/hackerweb" target="_blank" class="disclosure">HackerWeb on GitHub</a></li>
				<li><a href="https://twitter.com/cheeaun" target="_blank" class="disclosure">Follow @cheeaun</a></li>
				<li><a href="https://gratipay.com/cheeaun/" target="_blank" class="disclosure">Gratipay @cheeaun</a></li>
				<li><a href="mailto:cheeaun+hackerweb@gmail.com?subject=HackerWeb feedback" class="disclosure">Send Feedback</a></li>
			</ul>
			<p class="foot-label">Copy from Lim Chee Aun & built by Switer.<br>Not affiliated with Hacker News or YCombinator.</p>
		</section>
	    {% require $id='./about.css' %}
	</div>
    {% endpagelet %}
{% endblock %}