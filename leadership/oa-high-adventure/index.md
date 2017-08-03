---
title:  "OA High Adventure Committee - Western Region, Order of the Arrow, Boy Scouts of America"
date:   2017-01-16 16:00 -0600
description: "OA High Adventure in the Western Region."
---

# OA High Adventure

The OA High Adventure (OAHA) committee in the Western Region promotes OAHA through the Sections and Lodges.
It also administers the Region Scholarship Program for High Adventure.

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
					{% if site.data.leadership.oa_high_adventure.coordinator.first_name.size > 0 %}
						{{ site.data.leadership.oa_high_adventure.coordinator.first_name }} {{ site.data.leadership.oa_high_adventure.coordinator.last_name }}
						{% if site.data.leadership.oa_high_adventure.coordinator.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.oa_high_adventure.coordinator.email }}">{{ site.data.leadership.oa_high_adventure.coordinator.email }}</a>
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
					{% if site.data.leadership.oa_high_adventure.adviser.first_name.size > 0 %}
						{{ site.data.leadership.oa_high_adventure.adviser.first_name }} {{ site.data.leadership.oa_high_adventure.adviser.last_name }}
						{% if site.data.leadership.oa_high_adventure.adviser.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.oa_high_adventure.adviser.email }}">{{ site.data.leadership.oa_high_adventure.adviser.email }}</a>
						{% endif %}
					{% else %}
						TBD
					{% endif %}
				</li>
			</ul>
		</div>
	</div>
</div>

### OA High Adventure Scholarship

The Western Region offers an OA High Adventure Scholarship for each lodge to award.

<a href="{{ link program/scholarships/index.md }}" class="btn btn-default">Learn more about the OA High Adventure Scholarship</a>
