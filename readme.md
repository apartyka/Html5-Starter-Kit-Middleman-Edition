#Html5 Starter Kit: Middleman Edition
**Pre-Release Version 0.9**


##Description
A combination of Resource's [HTML5 Starter Kit](http://stash.resource.com/projects/VCL/repos/resource-html5-starter-kit/browse) and [dannyprose's Middleman-HTML5BP-HAML](https://github.com/dannyprose/Middleman-HTML5BP-HAML) projects.

##General Notes
The scss compiles in the...css folder?! Yes. Shit's on auto, bro. Checkout the config.rb file for all the global project settings: such as, build settings, localization, compression, addtional libraries, pancake making, and general front-end goodness. Compass is also included as a gem. If you don't want it just comment out the @import rule in styles.css.scss.
LiveReload and Compass are included as optional project gems. Check the config.rb file for settings.

##Dependencies
- Install Ruby. Mac users are good to go already. [Windows users: get RubyInstaller](https://forwardhq.com/support/installing-ruby-windows)
- Install RubyGems. [Mac users go here](http://rubygems.org/pages/download)
- [Install Middleman](http://middlemanapp.com/getting-started/#toc_1)
- If you don't have the bundler gem already, you will need to install it. Run the following command in your terminal/console: "gem install bundler". Bundler handles all the gem dependencies defined in the project's Gemfile.

## Development Cycle
Run the command "bundle exec middleman server". This boots up a server with the default host and port http://0.0.0.0:4567/
To build your project files into html and css, shut down your server, then run "middleman build".

###Recommended Reading and Resources
- [Understanding Middleman](http://benfrain.com/understanding-middleman-the-static-site-generator-for-faster-prototyping/)

