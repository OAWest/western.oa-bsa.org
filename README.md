# OAWest

Welcome to the public repository for the Western Region, Order of the Arrow. The Western Region consists of 14 sections throughout the Western United States, Hawaii Alaska, and Japan.

## Requirements

The Western Region website uses a static content creator called jekyll. Jekyll is free, open-source, and built upon Ruby. It compiles our html and markdown templates into a static website that can be served via HTTP.

To get started with Jekyll, you'll need:

* [Ruby](https://www.ruby-lang.org/en/downloads/)
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/download/)

You should also install the [GitHub Desktop](https://desktop.github.com/), which is a GUI application for using a Git repository with GitHub.

## Mac Installation

### Xcode Command Line Tools

A pre-requisite for using Jekyll (and Ruby) on OS X is to install the Xcode command line tools. To get started, open up the terminal application found in Applications > Utilities.

`$ xcode-select --install`

This will prompt you to install the Xcode command line tools. Complete the installation wizard.

### Ruby
Ruby is required for running Jekyll. The good news is that current OS X installations come preloaded with Ruby installed. To verify if Ruby is installed running the following:

`$ ruby -v`

### Jekyll

Once you have Ruby installed you can install the jekyll gem:

`$ gem install jekyll`

Our website also uses the jekyll-paginate plugin. This is easily installed via:

`$ gem install jekyll-paginate`

### Git

Next, you'll need to install Git:

* [Git](https://git-scm.com/)

Download the Git installer and complete the installation wizard.

You should also install the [GitHub Desktop](https://desktop.github.com/) application, which is a free Mac tool for using Git and GitHub.

### Node.js

Lastly, you will need to install Node.js:

* [Node.js](https://nodejs.org/en/download/)

Download the Macintosh Installer and complete the installation wizard.

## Windows Installation

### Ruby

Ruby is required for running Jekyll. The RubyInstaller is an open-source (free) and easy method for installing Ruby on Windows:

* [RubyInstaller](http://rubyinstaller.org/)

Download the appropriate installer (using x64 if you are running Windows with 64-bit) and the latest version. Complete the installation wizard. Be sure to:

* Select the option 'Add Ruby executables to your PATH' during the installation

Next, we need to install the Ruby Dev Kit for Windows. The same folks who provide the RubyInstaller also have a Windows download:

* [Ruby Development Kit](http://rubyinstaller.org/)

Download the appropriate installer. You are likely using the latest version of Ruby (greater than 2.0.0), so be sure to grab the installer that indicates 'For use with Ruby 2.0 and above', and choose the x64 option if you are running Windows with 64-bit.

The Ruby Dev Kit installer is just a simple 7-zip self-extractor. We recommend that you extract this to a simple folder (with no spaces) on your C: drive. For example:

* Choose to extract the Ruby Development Kit to: C:\RubyDevKit\
* Then, click 'Extract'

Now, we need to initialize the Ruby Development Kit. To do this, open up the Windows Command Prompt application. The easiest way to do this is to search for 'cmd' using Windows 10, or Start > Run > cmd for older versions. At the command line we will need to change directory (using the cd command) to the folder where we extracted the Ruby Development Kit. As noted previously, we recommend the folder C:\RubyDevKit\. Once in the folder, we will execute the command to initialize it.

    > cd C:\RubyDevKit
    > ruby dk.rb init

Running the init command should only take a second, and you should see the message 'Initialization complete!'

Next, we need to install the Development Kit for our Ruby installation. To do this we will run the following command, again in the folder where we installed the Development Kit. If you are following along with these instructions then you should already be there.

`> ruby dk.rb install`

Running the install command should result in a couple of '[INFO]' statements, ending with '[INFO] Installing ...'

### Jekyll

Once you have Ruby installed you can install the Jekyll gem. Again, we will run this command from the Command Prompt. If you run into an error with this command, it is likely because you did not choose the 'Add Ruby executable to PATH' option when you installed Ruby.

`> gem install jekyll`

Once you run this command you will likely be prompted to allow Ruby to add an exception to the Windows Firewall access control lists.

* Click the 'Allow Access' when prompted to allow the Ruby exception to Windows Firewall.

Once the installation is complete you should see a notification that '14 gems installed'.

Our website also uses the jekyll-paginate plugin. This is easily installed via:

`> gem install jekyll-paginate`

Once the installation is complete (and it might take a minute or so), you should see a notification that '1 gem installed'.

### Git

Next, you'll need to install Git:

* [Git](https://git-scm.com/)

Download the Git installer and complete the installation wizard choosing all of the default options.

You should also install the [GitHub Desktop](https://desktop.github.com/) application, which is a free Windows tool for using Git and GitHub.

### Node.js

Lastly, you will need to install Node.js:

* [Node.js](https://nodejs.org/en/download/)

Download the Windows Installer and complete the installation wizard.

## Fork Us

If you have successfully completed the installation requirements then you are ready to fork our repository, clone it locally, and then start contributing.

First, you will need to have a GitHub.com account. You can sign up for free.

Then, visit our repository and click the "Fork" button at the top. This should only take a couple of seconds, then you should be redirect back to your own GitHub account with a new forked copy of our repository.

Your forked repository should live at github.com/{{your_username}}/western.oa-bsa.org. For example, github.com/blove/western.oa-bsa.org.

Next, clone a copy of the forked repository to your computer.

### Clone via Command Line

Now that you have your own forked copy of the website repository, you can clone the repository to your local computer.

If you are using OS X then use the terminal to run the git clone command as follows, replacing {{your_username}} with your GitHub username.

`$ git clone https://github.com/{{your_username}}/western.oa-bsa.org`

If you are using Windows, then you can run the **Git Cmd** application and execute the command as follows, replacing {{your_username}} with your GitHub username

`> git clone https://github.com/{{your_username}}/western.oa-bsa.org`

You should now see a new folder (in the current directory where you executed the command) named 'wester.oa-bsa.org'.

### Clone via GitHub Desktop Application

Or, if you prefer to use the GitHub Desktop application then it is really easy to clone your forked repository.

When you first launch the GitHub Desktop application you are prompted to authenticate using your GitHub credentials. We highly recommend you do this, as it makes it very easy to clone repositories that are associated with your account (including the forked repository of the western.oa-bsa.org website).

Next, click the **+** icon in the top-left of the application, and then choose 'Clone'. If you are authenticated, you should see the 'western.oa-bsa.org' repository. Click on it to choose it, then click the large checkbox button at the bottom to 'Clone **western.oa-bsa.org**'

If you already cloned the repository using the git command line interface, then you can always add the local repository to your GitHub Desktop application. Simply click on the **+** icon in the top-left of the application, and choose 'Add'. Then, browse to the location of your local Git repository and click the large checkbox button to 'Add repository'

## Grunt

Next, install the grunt command line interface via npm:

`npm install -g grunt-cli`

If you are on Windows, you will likely need to restart the Command Prompt application so that the grunt command is available in your PATH.

Next, install the node and bower dependencies for the website via.

Mac OS X users should use the following command to install the necessary dependencies, run the grunt tasks, and install the bower dependencies:

    $ cd ./western.oa-bsa.org
    $ npm install
    $ grunt
    $ node_modules/.bin/bower install

Windows users will need to first install bower globally via:

`npm install -g bower`

Once you have bower installed on Windows you can run the following commands to install the necessary dependencies:

    > cd ./western.oa-bsa.org
    > npm install
    > grunt
    > bower install

## Serve it

Now that you have completed all of the installation steps you are ready to serve up a local copy of the Western Region OA website using jekyll and the built-in HTTP server. If you made it this far, you'll be happy to know that this last step is very easy. Be sure you are in the 'western.oa-bsa.org' folder and run:

`jekyll serve`

If this is successful you will see that the website is generated and the server is running on http://localhost:4000. Open up your favorite browser and enter this URL.

## Want to help?

It's easy to help us keep the website up to date:

* Go to our Github repository [github.com/OAWest/western.oa-bsa.org](github.com/OAWest/western.oa-bsa.org)
* Browse to the file with the error. Not sure where the file is? The files are mostly in either markdown (.md) or html (.html), and the file location should match the path the file in the URL.
* Click the edit (pencil) icon to edit the file.
* Make the necessary changes.
* Provide a commit message, and choose _Create a new branch for this commit and start a pull request_. This will send us a pull request. If the changes you made are acceptable, your commit (and it's changes) will be merged into the code for the website.

## New to Git?

We recommend the short Hello World sample provided by GitHub:

* [Hello World](https://guides.github.com/activities/hello-world/)

## Want to be on the team?

We're always looking for volunteers. Just send us a message on twitter:

* Western Region Technology Committe Lead: [@brian_love](https://twitter.com/brian_love)

## Have an issue?

Have a question or want to report an issue with the website? Click on the _Issues_ link, and then click on the _New Issue_ button. We'd love to hear your feedback.