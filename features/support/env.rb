#require 'rubygems' 
require 'spec' 
require "webrat/selenium"

Webrat.configure do |config|
  include Webrat::Methods
  include Webrat::Selenium::Methods
  include Webrat::Selenium::Matchers
  config.mode = :selenium
  config.selenium_server_address = 'localhost'
  config.application_framework = :external
  config.application_port = 4020
end

#this is necessary to have webrat "wait_for" the response body to be available
#when writing steps that match against the response body returned by selenium
World(Webrat::Selenium::Matchers)
