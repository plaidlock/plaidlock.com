class PagesController < ApplicationController
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
end