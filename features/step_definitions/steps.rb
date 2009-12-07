
Given /^I visit "([^"]*)"$/ do |arg1|
  visit arg1
end

Then /^I should see "([^\"]*)"$/ do |arg1|
  response_body.should contain(arg1)
end
