module ApplicationHelper
  def title(page_title)
    content_for :title do
      "#{page_title} :: PlaidLock, LLC"
    end
  end
  
  def description(page_description)
    content_for :description do
      page_description
    end
  end
  
  def keywords(page_keywords)
    content_for :keywords do
      "#{page_keywords}, PlaidLock, Web Design, Web Development, Application Development"
    end
  end
end