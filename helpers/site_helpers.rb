module SiteHelpers

  def page_title
    title = 'A title? Hello?'
    if data.page.title
      title << ' | ' + data.page.title
    end
    title
  end
  
  def page_description
    if data.page.description
      description = data.page.description
    else
      description = 'set description in site_helpers.rb'
    end
    description
  end

end