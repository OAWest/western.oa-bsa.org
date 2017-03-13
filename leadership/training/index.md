---
title:  "Training Committee - Western Region, Order of the Arrow, Boy Scouts of America"
date:   2017-01-16 16:00 -0600
description: "Training in the Western Region."
---

# Training

The Training committee in the Western Region is broken into NLS Training and DYLC Training.
Their responsibility is the planning and implementation of the programs throughout the Region.
They build trained teams that travel to put on the programs based on input from the National Committee

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
					{% if site.data.leadership.training.coordinator.first_name.size > 0 %}
						{{ site.data.leadership.training.coordinator.first_name }} {{ site.data.leadership.training.coordinator.last_name }}
						{% if site.data.leadership.training.coordinator.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.training.coordinator.email }}">{{ site.data.leadership.training.coordinator.email }}</a>
						{% endif %}
					{% else %}
						TBD
					{% endif %}
				</li>
				{% for member in site.data.leadership.training.members %}
				<li class="list-group-item">{{ member.first_name }} {{ member.last_name }} </li>
				{% endfor %}
			</ul>
		</div>
	</div>
	<div class="col-xs-12 col-sm-6">
		<div class="panel panel-default">
			<div class="panel-heading">
			 NLS
			</div>
			<ul class="list-group">
        {% for coordinator in site.data.leadership.training.nls.coordinators %}
          <li class="list-group-item">
            NLS Coordinator - {{ coordinator.first_name }} {{ coordinator.last_name }}
            {% if coordinator.email.size > 0 %}
              <br><a href="mailto:{{ coordinator.email }}">{{ coordinator.email }}</a>
            {% endif %}
          </li>
        {% endfor %}
			</ul>
		</div>
	</div>
	<div class="col-xs-12 col-sm-6">
		<div class="panel panel-default">
			<div class="panel-heading">
			 DYLC
			</div>
			<ul class="list-group">
        {% for coordinator in site.data.leadership.training.dylc.coordinators %}
          <li class="list-group-item">
            DYLC Coordinator - {{ coordinator.first_name }} {{ coordinator.last_name }}
            {% if coordinator.email.size > 0 %}
              <br><a href="mailto:{{ coordinator.email }}">{{ coordinator.email }}</a>
            {% endif %}
          </li>
        {% endfor %}
			</ul>
		</div>
	</div>
</div>