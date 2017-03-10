---
title:  "Camping Promotions Committee - Western Region, Order of the Arrow, Boy Scouts of America"
date:   2017-01-16 16:00 -0600
description: "Camping Promotions in the Western Region."
---

# Camping Promotions

Our Order was founded on camping, and that needs to be a focus of the Order.
The scouting program is where our members come from.
It needs to be our duty to help our Councils wherever possible to support this endeavor.

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
					{% if site.data.leadership.camping_promotions.coordinator.first_name.size > 0 %}
						{{ site.data.leadership.camping_promotions.coordinator.first_name }} {{ site.data.leadership.camping_promotions.coordinator.last_name }}
						{% if site.data.leadership.camping_promotions.coordinator.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.camping_promotions.coordinator.email }}">{{ site.data.leadership.camping_promotions.coordinator.email }}</a>
						{% endif %}
					{% else %}
						TBD
					{% endif %}
				</li>
				{% for member in site.data.leadership.camping_promotions.members %}
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
					{% if site.data.leadership.camping_promotions.adviser.first_name.size > 0 %}
						{{ site.data.leadership.camping_promotions.adviser.first_name }} {{ site.data.leadership.camping_promotions.adviser.last_name }}
						{% if site.data.leadership.camping_promotions.adviser.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.camping_promotions.adviser.email }}">{{ site.data.leadership.camping_promotions.adviser.email }}</a>
						{% endif %}
					{% else %}
						TBD
					{% endif %}
				</li>
			</ul>
		</div>
	</div>
</div>