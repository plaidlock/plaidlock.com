class PlaidLockMailer < ActionMailer::Base
  default :from => 'webmailer@plaidlock.com',
          :to => 'info@plaidlock.com'
  
  def contact(sender, message)
    @sender, @message = sender, message
    mail(:subject => 'Website Email')
  end
end