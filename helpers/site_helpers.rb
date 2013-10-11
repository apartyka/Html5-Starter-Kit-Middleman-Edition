module SiteHelpers

  def page_title
    title = "Middleman: "
    if data.page.title
      title << data.page.title
    else
      title << "Hand-crafted frontend development"
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