Given(/^a text sample$/) do
  @text = File.open('features/support/sample.txt', 'r').read
end

When(/^I add the topic 'Hot' to 'Dubai in July'$/) do
  @topics = []
  @topics << 'Hot'
end

Then(/^I see increase in the 'Hot' meaning$/) do
  expect(@topics).to include('Hot')
end

