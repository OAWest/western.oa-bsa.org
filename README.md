# OAWest

Welcome to the public repository for the Western Region, Order of the Arrow. The Western Region consists of 14 sections throughout the Western United States, Hawaii Alaska, and Japan.

## Requirements

The Western Region website uses a static content creator called jekyll. Jekyll is free, open-source, and built upon Ruby. It compiles our html and markdown templates into a static website that can be served via HTTP.

To get started with Jekyll, you'll need:

* [Ruby](https://www.ruby-lang.org/en/downloads/)
* [RubyGems](https://rubygems.org/pages/download)
* [NodeJS](https://nodejs.org/)

## Installation

Once you have Ruby installed you can install the jekyll gem:

`$ gem install jekyll`

If you have trouble installing Jekyll on Windows, there is a [guide for installing on Windows](http://jekyll-windows.juthilo.com/)

Next, you'll need:

* [Git](https://git-scm.com/)
* [SourceTree](https://www.sourcetreeapp.com/) - not required but recommended

Now that you have git installed, you will need to either fork or clone the Git repository. If you have a Github account, we suggest you fork the repository for making contributions. Otherwise, you can clone from our master:

`$ git clone https://github.com/OAWest/western.oa-bsa.org`

Next, install the grunt command line interface via npm:

`npm install -g grunt-cli`

Next, install the node and bower dependencies for the website via:

    $ cd ./western.oa-bsa.org
    $ npm install
    $ grunt
    $ node_modules/.bin/bower install


## Want to help?

It's easy to help us keep the website up to date:

* Go to our Github repository [github.com/OAWest/western.oa-bsa.org](github.com/OAWest/western.oa-bsa.org)
* Browse to the file with the error. Not sure where the file is? The files are mostly in either markdown (.md) or html (.html), and the file location should match the path the file in the URL.
* Click the edit (pencil) icon to edit the file.
* Make the necessary changes.
* Provide a commit message, and choose _Create a new branch for this commit and start a pull request_. This will send us a pull request. If the changes you made are acceptable, your commit (and it's changes) will be merged into the code for the website.

## Want to be on the team?

We're always looking for volunteers. Just send us a message on twitter:

* Western Region Technology Committe Lead: [@brian_love](https://twitter.com/brian_love)

## Have an issue?

Have a question or want to report an issue with the website? Click on the _Issues_ link, and then click on the _New Issue_ button. We'd love to hear your feedback.