---
title:  "Region Chief - Western Region, Order of the Arrow, Boy Scouts of America"
date:   2016-04-29 17:27 -0600
description: "Meet the Western Region Chief."
---

# {{ site.time | date: "%Y" }} Western Region Chief {{site.data.leadership.chief.first_name}} {{site.data.leadership.chief.last_name}}

<div class="text-center">
  <img src="{{ site.baseurl }}images/leadership/chief.jpg" srcset="/images/leadership/chief.jpg 2x" style="height: 200px; width: 138px;" class="img-thumbnail">
</div>

{% if site.data.leadership.chief.profile.size > 0 %}
  <h3>About {{site.data.leadership.chief.first_name}}</h3>
  {{site.data.leadership.chief.profile}}
{% endif %}

<div class="text-center">
  <a href="mailto:{{site.data.leadership.chief.email}}" class="btn btn-lg btn-default">Email Me</a>
  <a href="http://twitter.com/home/?status={{ "@oawest" | cgi_escape }}" class="btn btn-lg btn-default">Send me a Tweet</a>
</div>