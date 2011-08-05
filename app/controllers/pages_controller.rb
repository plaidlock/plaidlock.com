class PagesController < ApplicationController
  before_filter :cache_pages, :except => [:contact]

  def contact
    if request.post?
      begin
        PlaidLockMailer.contact(params[:from], params[:message]).deliver!
        redirect_to :back, :notice => 'You mail has been sent!'
      rescue
        redirect_to :back, :alert => 'There were errors sending your message. We are looking into it.'
      end
    end
  end

  private
  def cache_pages
    response.headers['Cache-Control'] = 'public, max-age=2592000' unless Rails.env.development?
  end
end