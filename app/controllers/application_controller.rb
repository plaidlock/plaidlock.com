class ApplicationController < ActionController::Base
  protect_from_forgery
  layout :process_layout
  
  APP_DOMAIN = 'www.plaidlock.com'
  before_filter :ensure_domain
  
  private
  def ensure_domain
    unless request.env['HTTP_HOST'] == APP_DOMAIN || Rails.env.development?
      redirect_to "http://#{APP_DOMAIN}", :status => 301
    end
  end
  
  def process_layout
    request.xhr? ? nil : 'application'
  end
end
