---
title:  "Cub Scout Camping Committee - Western Region, Order of the Arrow, Boy Scouts of America"
date:   2017-01-16 16:00 -0600
description: "Cub Scout Camping in the Western Region."
---

# Cub Scout Camping

Our Order was founded on camping and Cub Scout Camping needs to be a focus of the Order.
The Cub Scout program is the natural feeder for the Boy Scout Program from where our members come.
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
					Youth Coordinator -
					{% if site.data.leadership.cub_scout_camping.coordinator.first_name.size > 0 %}
						{{ site.data.leadership.cub_scout_camping.coordinator.first_name }} {{ site.data.leadership.cub_scout_camping.coordinator.last_name }}
						{% if site.data.leadership.cub_scout_camping.coordinator.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.cub_scout_camping.coordinator.email }}">{{ site.data.leadership.cub_scout_camping.coordinator.email }}</a>
						{% endif %}
					{% else %}
						TBD
					{% endif %}
				</li>
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
					{% if site.data.leadership.cub_scout_camping.adviser.first_name.size > 0 %}
						{{ site.data.leadership.cub_scout_camping.adviser.first_name }} {{ site.data.leadership.cub_scout_camping.adviser.last_name }}
						{% if site.data.leadership.cub_scout_camping.adviser.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.cub_scout_camping.adviser.email }}">{{ site.data.leadership.cub_scout_camping.adviser.email }}</a>
						{% endif %}
					{% else %}
						TBD
					{% endif %}
				</li>
			</ul>
		</div>
	</div>
</div>