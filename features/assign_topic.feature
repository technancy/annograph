Feature: Assign topic
  As a reader
  In order to improve the accuracy of the argument
  I want to assign a topic to a collection of words

  Scenario:
    Given a text sample
    When I add the topic 'Hot' to 'Dubai in July'
    Then I see increase in the 'Hot' meaning
