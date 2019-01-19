$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/jahan/eclipse-workspace/ebay/src/main/java/Features/L.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "verify login functionality",
  "description": "",
  "id": "login-functionality;verify-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@n"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Verify Title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify logo of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "login-functionality;verify-login-functionality;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123"
      ],
      "line": 14,
      "id": "login-functionality;verify-login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7744535117,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify login functionality",
  "description": "",
  "id": "login-functionality;verify-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@n"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Verify Title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify logo of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter \"techfiosdemo@gmail.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Lstepdefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 291604149,
  "status": "passed"
});
formatter.match({
  "location": "Lstepdefinition.Verify_Title_of_the_page()"
});
formatter.result({
  "duration": 17666603,
  "status": "passed"
});
formatter.match({
  "location": "Lstepdefinition.Verify_logo_of_the_page()"
});
formatter.result({
  "duration": 49145170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 12
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "Lstepdefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 360289755,
  "status": "passed"
});
formatter.match({
  "location": "Lstepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 2310679581,
  "status": "passed"
});
formatter.after({
  "duration": 903938759,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "verify login functionality",
  "description": "",
  "id": "login-functionality;verify-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@n"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Verify Title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify logo of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Title of the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User click ProductsNServices",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User click NewServices",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User type \"\u003cname\u003e\" and \"\u003csaleprice\u003e\" and \"\u003citemnumber\u003e\" and \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User click submit",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "name",
        "saleprice",
        "itemnumber",
        "description"
      ],
      "line": 32,
      "id": "login-functionality;verify-login-functionality;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "KABIR",
        "5000",
        "3004",
        "TDD"
      ],
      "line": 33,
      "id": "login-functionality;verify-login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4538187771,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify login functionality",
  "description": "",
  "id": "login-functionality;verify-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@n"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Verify Title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Verify logo of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter \"techfiosdemo@gmail.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Title of the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User click ProductsNServices",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User click NewServices",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User type \"KABIR\" and \"5000\" and \"3004\" and \"TDD\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User click submit",
  "keyword": "Then "
});
formatter.match({
  "location": "Lstepdefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 639479,
  "status": "passed"
});
formatter.match({
  "location": "Lstepdefinition.Verify_Title_of_the_page()"
});
formatter.result({
  "duration": 40633779,
  "status": "passed"
});
formatter.match({
  "location": "Lstepdefinition.Verify_logo_of_the_page()"
});
formatter.result({
  "duration": 84834037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 12
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "Lstepdefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 409229660,
  "status": "passed"
});
formatter.match({
  "location": "Lstepdefinition.user_click_login_button()"
});
formatter.result({
  "duration": 2010185485,
  "status": "passed"
});
formatter.match({
  "location": "Lstepdefinition.Title_of_the_Home_page()"
});
formatter.result({
  "duration": 15634085,
  "status": "passed"
});
formatter.match({
  "location": "Lstepdefinition.User_click_ProductsNServices()"
});
formatter.result({
  "duration": 292027706,
  "status": "passed"
});
formatter.match({
  "location": "Lstepdefinition.User_click_NewServices()"
});
formatter.result({
  "duration": 6669741694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KABIR",
      "offset": 11
    },
    {
      "val": "5000",
      "offset": 23
    },
    {
      "val": "3004",
      "offset": 34
    },
    {
      "val": "TDD",
      "offset": 45
    }
  ],
  "location": "Lstepdefinition.User_enter_Name_and_salesprice_and_itemnumber_and_Description(String,String,String,String)"
});
formatter.result({
  "duration": 833047739,
  "status": "passed"
});
formatter.match({
  "location": "Lstepdefinition.User_click_submit()"
});
formatter.result({
  "duration": 266865774,
  "status": "passed"
});
formatter.after({
  "duration": 1073419726,
  "status": "passed"
});
});