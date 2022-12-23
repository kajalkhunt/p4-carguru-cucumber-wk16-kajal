$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I want to search functionality",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Honda",
        "Accord",
        "NSW - Sydney",
        "$20,000"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "Any Model",
        "ACT - All",
        "$10,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Nissan",
        "Any Model",
        "NT - North",
        "$15,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Land Rover",
        "Discovery 4",
        "QLD - All",
        "$60,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Mazda",
        "6",
        "Any Location",
        "$5,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Mercedes-Benz",
        "Any Model",
        "NSW - Hunter",
        "$10,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12470804300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Accord\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 404126700,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 725467501,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2239207300,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 40801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuyCarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 645206801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accord",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 2161319099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "BuyCarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 179579701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 164515901,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3395856100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "BuyCarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 532894901,
  "status": "passed"
});
formatter.after({
  "duration": 1203544200,
  "status": "passed"
});
formatter.before({
  "duration": 7091139901,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$10,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 65800,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 607594200,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 833149401,
  "error_message": "org.openqa.selenium.interactions.MoveTargetOutOfBoundsException: move target out of bounds\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8b164c0185d45fb9adc9a004df116d56, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@1229a2b7]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\Rx_bh\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58298}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58298/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8b164c0185d45fb9adc9a004df116d56\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat au.com.carsguide.utility.Utility.mouseHoverToElementAndClick(Utility.java:244)\r\n\tat au.com.carsguide.pages.BuyCarPage.clickOnSerchCars(BuyCarPage.java:58)\r\n\tat au.com.carsguide.steps.BuyCarsSteps.iClickSearchCarsLink(BuyCarsSteps.java:22)\r\n\tat ✽.And I click ‘Search Cars’ link(buy.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BuyCarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyCarsSteps.iSelectMake(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuyCarsSteps.iSelectLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyCarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyCarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2396305601,
  "status": "passed"
});
formatter.before({
  "duration": 8151933299,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NT - North\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$15,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 71600,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 701833900,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 3137928500,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 39900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "BuyCarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 503231599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 2107030800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - North",
      "offset": 19
    }
  ],
  "location": "BuyCarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 136043000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 142568600,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4174088199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "BuyCarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 93181501,
  "status": "passed"
});
formatter.after({
  "duration": 890696201,
  "status": "passed"
});
formatter.before({
  "duration": 14401721001,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Discovery 4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Land Rover\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 121300,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 530483600,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2657535500,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "BuyCarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 593810600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discovery 4",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 2152183700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuyCarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 155297000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 197684999,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4235114200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "BuyCarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 71775401,
  "status": "passed"
});
formatter.after({
  "duration": 900161800,
  "status": "passed"
});
formatter.before({
  "duration": 6798006200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Mazda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$5,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Mazda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 78200,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 484687700,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 3667309700,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 37599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "BuyCarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 662423300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 2132163700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "BuyCarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 120140200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$5,000",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 145104900,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4531063200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "BuyCarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 77920200,
  "status": "passed"
});
formatter.after({
  "duration": 968519199,
  "status": "passed"
});
formatter.before({
  "duration": 6288281600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Mercedes-Benz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$10,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Mercedes-Benz\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 80099,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 825432900,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 324488400,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 32900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 15
    }
  ],
  "location": "BuyCarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2651366500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 2104057401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "BuyCarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 162440600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 16
    }
  ],
  "location": "BuyCarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 182033599,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3365200500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 23
    }
  ],
  "location": "BuyCarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 68244501,
  "status": "passed"
});
formatter.after({
  "duration": 969679400,
  "status": "passed"
});
formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "As a user I want to search functionality",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"\u003cdealersName\u003e\" are display on page",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 11,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 12,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2"
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 13,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3"
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 14,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4"
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 15,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5"
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 16,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6"
    },
    {
      "cells": [
        "ANDREA MOTORI SERVICE"
      ],
      "line": 17,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;7"
    },
    {
      "cells": [
        "Oxford Motors"
      ],
      "line": 18,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6403870101,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"3 Point Motors Epping\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41100,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 395793900,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 1294073200,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 73000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Point Motors Epping",
      "offset": 31
    }
  ],
  "location": "FindDealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 2415252700,
  "status": "passed"
});
formatter.after({
  "duration": 993294501,
  "status": "passed"
});
formatter.before({
  "duration": 19882650400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"4WD Specialist Group\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 58700,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 519722000,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 1829220000,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 31500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4WD Specialist Group",
      "offset": 31
    }
  ],
  "location": "FindDealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 595076600,
  "status": "passed"
});
formatter.after({
  "duration": 859537399,
  "status": "passed"
});
formatter.before({
  "duration": 19887409500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"5 Star Auto\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 68100,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 328809700,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 613220401,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 Star Auto",
      "offset": 31
    }
  ],
  "location": "FindDealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 1962289999,
  "status": "passed"
});
formatter.after({
  "duration": 842549300,
  "status": "passed"
});
formatter.before({
  "duration": 7844006299,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"A \u0026 M Car Sales Pty Ltd\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44201,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 553221500,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 477466200,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 77700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A \u0026 M Car Sales Pty Ltd",
      "offset": 31
    }
  ],
  "location": "FindDealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 2201287200,
  "status": "passed"
});
formatter.after({
  "duration": 970482599,
  "status": "passed"
});
formatter.before({
  "duration": 12234670801,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"A1 MOTORS COMPANY\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 52400,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 350558799,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 1453628000,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 174000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1 MOTORS COMPANY",
      "offset": 31
    }
  ],
  "location": "FindDealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 621417099,
  "status": "passed"
});
formatter.after({
  "duration": 889980999,
  "status": "passed"
});
formatter.before({
  "duration": 7908867501,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"ANDREA MOTORI SERVICE\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38401,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 684816501,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 1915352299,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ANDREA MOTORI SERVICE",
      "offset": 31
    }
  ],
  "location": "FindDealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 535870101,
  "status": "passed"
});
formatter.after({
  "duration": 922805000,
  "status": "passed"
});
formatter.before({
  "duration": 12748582600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"Oxford Motors\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCarsSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37100,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarsSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 344291400,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 190675201,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 47500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxford Motors",
      "offset": 31
    }
  ],
  "location": "FindDealerSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 2025623600,
  "status": "passed"
});
formatter.after({
  "duration": 923098500,
  "status": "passed"
});
formatter.uri("usedCars.feature");
formatter.feature({
  "line": 1,
  "name": "Search usedcars",
  "description": "As a user I want to search usedcars",
  "id": "search-usedcars",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-usedcars;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-usedcars;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-usedcars;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Alfa Romeo",
        "Any Model",
        "NSW - Central Coast",
        "$60,000"
      ],
      "line": 17,
      "id": "search-usedcars;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Audi",
        "A1",
        "NSW - Far North Coast",
        "$80,000"
      ],
      "line": 18,
      "id": "search-usedcars;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Holden",
        "Adventra",
        "NSW - Central Coast",
        "$45,000"
      ],
      "line": 19,
      "id": "search-usedcars;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Audi",
        "A4",
        "QLD - All",
        "$40,000"
      ],
      "line": 20,
      "id": "search-usedcars;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Hyundai",
        "Accent",
        "NSW - All",
        "$60,000"
      ],
      "line": 21,
      "id": "search-usedcars;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Mazda",
        "6",
        "QLD - All",
        "$40,000"
      ],
      "line": 22,
      "id": "search-usedcars;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
