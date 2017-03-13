---
title:  "Administration Committee - Western Region, Order of the Arrow, Boy Scouts of America"
date:   2017-01-16 16:00 -0600
description: "Administration in the Western Region."
---

# Administration

The Administration committee updates and maintains the information and databases for the Western Region.

### Leadership

<div class="row">
	<div class="col-xs-12">
		<div class="panel panel-default">
			<div class="panel-heading">
			 Adult Leadership
			</div>
			<ul class="list-group">
        <li class="list-group-item">
					Adult Adviser -
					{% if site.data.leadership.administration.adviser.first_name.size > 0 %}
						{{ site.data.leadership.administration.adviser.first_name }} {{ site.data.leadership.administration.adviser.last_name }}
						{% if site.data.leadership.administration.adviser.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.administration.adviser.email }}">{{ site.data.leadership.administration.adviser.email }}</a>
						{% endif %}
					{% else %}
						TBD
					{% endif %}
				</li>
			</ul>
		</div>
	</div>
</div>