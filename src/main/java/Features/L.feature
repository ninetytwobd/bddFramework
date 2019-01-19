Feature: Login functionality

@n
Scenario Outline: verify login functionality

Given User already on login page 
Then Verify Title of the page
Then Verify logo of the page 
Then User enter "<username>" and "<password>"
Then User click login button

Examples:
|username|password|
|techfiosdemo@gmail.com|abc123|

@n
Scenario Outline: verify login functionality

Given User already on login page 
Then Verify Title of the page
Then Verify logo of the page 
Then User enter "<username>" and "<password>"
Then User click login button
Then Title of the Home page
Then User click ProductsNServices
Then User click NewServices
Then User type "<name>" and "<saleprice>" and "<itemnumber>" and "<description>"
Then User click submit  


Examples:
|username|password|name|saleprice|itemnumber|description|
|techfiosdemo@gmail.com|abc123|KABIR|5000|3004|TDD|