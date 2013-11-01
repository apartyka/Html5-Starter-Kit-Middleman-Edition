# Html5 Starter Kit Middleman Edition Notes

Please note that this port of the Resource Html5 Starter Kit has been converted to use HAML and Sprockets, while using a Middleman 3.x workflow.

## Recommendations

* Update `.rvmrc` to the [gemset](https://rvm.io/gemsets/basics/) of your choosing (or remove it if you do not use [RVM](https://rvm.io/))
* Double check `.gitignore` and make sure it is what you want.
  * eg: `build/` is ignored by default.
* If you don't use `middleman init` to load the template, make sure to [use and run Bundler](http://gembundler.com/).

## Site and Individual Page Titles and Descriptions
Titles and descriptions are handled 2 ways:

For the site at large, the title & description is handled through `/helpers/site_helpers.rb`. You can set them there, and the default layout file will include them on every page.

For individual pages, just add some YAML data to the top of any given page (see our default index for an example):

```yaml
---
title:
description:
---
```

### Changing the Site Title and Description

To the change site's title and description, edit the values in `/helpers/site_helpers.rb`. You can also edit the formatting for individual page title and descriptions here.

To change, individual page's titles and descriptions, see the YAML method above.

### But I Don't Want This

No problem - it's included because we thought this was a good, DRY use case for Middleman, and it is what the Middleman Docs site uses.

If you want to develop a method of your own, just remove the `page_title` and `page_description` methods in `/helpers/site_helpers.rb`, remove their references in `/layouts/layout.haml` (all within `<head>`), and restart Middleman. Then do whatever you want to include titles and headers.