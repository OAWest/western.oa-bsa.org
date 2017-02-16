---
title:  "Communications Committee - Western Region, Order of the Arrow, Boy Scouts of America"
date:   2017-01-16 16:00 -0600
description: "Communication Committee in the Western Region."
---

# Communication Committee

The communications committee is separated into two teams that work closely together to provide the technology, communication and marketing needs of the Western Region.

### Leadership

<div class="row">
	<div class="col-xs-12 col-sm-6">
		<div class="panel panel-default">
			<div class="panel-heading">
			 Youth Leadership
			</div>
			<ul class="list-group">
			  <li class="list-group-item">
          Media Team Lead -
          {% if site.data.leadership.communications.media_team.lead.first_name.size > 0 %}
            {{ site.data.leadership.communications.media_team.lead.first_name }} {{ site.data.leadership.communications.media_team.lead.last_name }}
						{% if site.data.leadership.communications.media_team.lead.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.communications.media_team.lead.email }}">{{ site.data.leadership.communications.media_team.lead.email }}</a>
						{% endif %}
					{% else %}
						TBD
          {% endif %}
        </li>
        <li class="list-group-item">
          Media Team Lead -
          {% if site.data.leadership.communications.tech_team.lead.first_name.size > 0 %}
            {{ site.data.leadership.communications.tech_team.lead.first_name }} {{ site.data.leadership.communications.tech_team.lead.last_name }}
						{% if site.data.leadership.communications.tech_team.lead.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.communications.tech_team.lead.email }}">{{ site.data.leadership.communications.tech_team.lead.email }}</a>
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
			 Adult Advisers
			</div>
			<ul class="list-group">
			  <li class="list-group-item">
          Media Team Advisor -
          {% if site.data.leadership.communications.media_team.adviser.first_name.size > 0 %}
            {{ site.data.leadership.communications.media_team.adviser.first_name }} {{ site.data.leadership.communications.media_team.adviser.last_name }}
						{% if site.data.leadership.communications.media_team.adviser.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.communications.media_team.adviser.email }}">{{ site.data.leadership.communications.media_team.adviser.email }}</a>
						{% endif %}
					{% else %}
						TBD
          {% endif %}
        </li>
        <li class="list-group-item">
          Tech Team Lead -
          {% if site.data.leadership.communications.tech_team.adviser.first_name.size > 0 %}
            {{ site.data.leadership.communications.tech_team.adviser.first_name }} {{ site.data.leadership.communications.tech_team.adviser.last_name }}
						{% if site.data.leadership.communications.tech_team.adviser.email.size > 0 %}
							<br><a href="mailto:{{ site.data.leadership.communications.tech_team.adviser.email }}">{{ site.data.leadership.communications.tech_team.adviser.email }}</a>
						{% endif %}
					{% else %}
						TBD
          {% endif %}
        </li>
			</ul>
		</div>
	</div>
</div>

### Committee Members

<div class="row leadership">
	<div class="col-xs-12 col-sm-6">
		<div class="panel panel-default">
			<div class="panel-heading">
			 Media Team
			</div>
			<ul class="list-group">
			  {% for member in site.data.leadership.communications.media_team.members %}
          <li class="list-group-item">{{ member.first_name }} {{ member.last_name }} </li>
        {% endfor %}
			</ul>
		</div>
	</div>
	<div class="col-xs-12 col-sm-6">
		<div class="panel panel-default">
			<div class="panel-heading">
			 Tech Team
			</div>
			<ul class="list-group">
			  {% for member in site.data.leadership.communications.tech_team.members %}
          <li class="list-group-item">{{ member.first_name }} {{ member.last_name }} </li>
        {% endfor %}
			</ul>
		</div>
	</div>
</div>

### 2017 Goals

1. Define metrics and use to optimize effectiveness of communications to youth and adult audience.
2. Establish collaboration and share best practices across regions.
3. Promote content from national communications teams.
4. Collect and promote information across western region section and lodges.
5. Create several new articles every month for publishing to western region website.
6. Post messages every week to Twitter and Facebook.
7. Re-establish western region Instagram and Snapchat social media accounts.
8. Assess section and lodge social media comms and guide best practices and value of engagement.
9. Conduct survey to section and lodge leadership on what they like to see more from western region comms team.
10. Establish digital collaboration among western region section and lodge leadership

### 2016 Report

<a href="{{ site.baseurl }}leadership/communications/assets/2016-communications-committee-report.pdf" class="btn btn-lg btn-primary btn-block"><i class="fa fa-file-pdf"></i> Download 2016 Report [PDF]</a>