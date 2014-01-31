#Markdown
set :markdown_engine, :redcarpet

#Directory settings
set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'
set :fonts_dir, 'assets/fonts'

#Livereload
#Windows users need to specify their development port - https://github.com/middleman/middleman-livereload/issues/26
#activate :livereload, :host => '172.25.44.96' #Work
activate :livereload, :host => '192.168.1.107' #House

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

###
# Compass
###

# Change Compass configuration
compass_config do |config|
   config.output_style = :expanded
   config.sass_options = {:line_comments => false}
end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
# 
# With no layout
# page "/path/to/file.html", :layout => false
# 
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
# 
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

# ----------------------------------------------------------------------------------------------------------------------
# Build-specific configuration:  The following is only applied when building a project.
# ----------------------------------------------------------------------------------------------------------------------
configure :build do

  # Use relative URLs
  activate :relative_assets

  # Minify assets
  activate :minify_css
  activate :minify_javascript
  
  # Enable cache buster
  # activate :cache_buster
  
  # Compress PNGs after build
  # First: gem install middleman-smusher
  #require "middleman-smusher"
  #activate :smusher
  
  # Or use a different image path
  # set :http_path, "/Content/images/"
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
#helpers do
#  def some_helper
#   'Helping'
#  end
#
#  def say_hello
#    puts 'Hello'
#  end
#end
#module MyFeature
#  class << self
#    def registered(app)
#      app.extend ClassMethods
#    end
#    alias :included :registered
#  end
#
#  module ClassMethods
#    def say_hello
#      puts 'Hello'
#    end
#  end
#
#  module HelperMethods
#    def make_a_link(url, text)
#      "<a href='#{url}'>#{text}</a>"
#    end
#  end
#end
