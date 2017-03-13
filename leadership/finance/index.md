---
title:  "Finance Committee - Western Region, Order of the Arrow, Boy Scouts of America"
date:   2017-01-16 16:00 -0600
description: "Finance in the Western Region."
---

# Finance

The Finance Committee in the Western Region is responsible to provide balancing the region's budget and providing transparency.

### Leadership

<div class="row leadership">
	<div class="col-xs-12 col-sm-6">
		<div class="panel panel-default">
			<div class="panel-heading">
			 Youth Leadership
			</div>
			<ul class="list-group">
        <li class="list-group-item">
					Committee Lead -
					{% if site.data.leadership.finance.coordinator.first_name.size > 0 %}
						{{ site.data.leadership.finance.coordinator.first_name }} {{ site.data.leadership.finance.coordinator.last_name }}
						{% if site.data.leadership.finance.coordinator.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.finance.coordinator.email }}">{{ site.data.leadership.finance.coordinator.email }}</a>
						{% endif %}
					{% else %}
						TBD
					{% endif %}
				</li>
				{% for member in site.data.leadership.finance.members %}
				<li class="list-group-item">{{ member.first_name }} {{ member.last_name }} </li>
				{% endfor %}
			</ul>
		</div>
	</div>
	<div class="col-xs-12 col-sm-6">
		<div class="panel panel-default">
			<div class="panel-heading">
			 Adult Leadership
			</div>
			<ul class="list-group">
        <li class="list-group-item">
					Adult Adviser -
					{% if site.data.leadership.finance.adviser.first_name.size > 0 %}
						{{ site.data.leadership.finance.adviser.first_name }} {{ site.data.leadership.finance.adviser.last_name }}
						{% if site.data.leadership.finance.adviser.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.finance.adviser.email }}">{{ site.data.leadership.finance.adviser.email }}</a>
						{% endif %}
					{% else %}
						TBD
					{% endif %}
				</li>
			</ul>
		</div>
	</div>
</div>