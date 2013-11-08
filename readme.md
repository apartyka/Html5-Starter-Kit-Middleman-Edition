#Html5 Starter Kit: Middleman Edition
**Pre-Release Version 0.9**


##Description
A combination of Resource's [HTML5 Starter Kit](http://stash.resource.com/projects/VCL/repos/resource-html5-starter-kit/browse) and [dannyprose's Middleman-HTML5BP-HAML](https://github.com/dannyprose/Middleman-HTML5BP-HAML) projects.

##General Notes
Checkout the config.rb file for all the global project settings: such as, build settings, localization, compression, additional libraries, pancake recipes, and general front-end goodness. Compass is also included as a gem. If you don't want it just comment out the @import rule in styles.css.scss.
LiveReload and Compass are included as optional project gems. Check the config.rb file for settings.

##Dependencies
- [Install Ruby.](https://www.ruby-lang.org/en/downloads/) Mac users are good to go already.
- [Windows users: get RubyInstaller](https://forwardhq.com/support/installing-ruby-windows)
- Install RubyGems. [Mac users go here](http://rubygems.org/pages/download) Windows user will receive RubyGems with the RubyInstaller.
- [Install Middleman](http://middlemanapp.com/getting-started/#toc_1)
- If you don't have the "bundler" gem already, you will need to install it. Run the following command in your console: "gem install bundler". Bundler handles all the gem dependencies defined in the project's Gemfile.

## Development Cycle
Console commands
- "bundle exec middleman server". Boots up a server with the default host and port http://0.0.0.0:4567/
- "bundle exec middleman build". Builds your project files into html and css.

###Recommended Reading and Resources
- [Understanding Middleman](http://benfrain.com/understanding-middleman-the-static-site-generator-for-faster-prototyping/)
- [Middleman Site]()

