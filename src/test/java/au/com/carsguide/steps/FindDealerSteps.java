package au.com.carsguide.steps;

import au.com.carsguide.pages.FindDealersPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class FindDealerSteps {
    @And("^I click ‘Find a Dealer’$")
    public void iClickFindADealer() {
        new FindDealersPage().clickOnFindADealerLink();
    }
    @Then("^I navigate to ‘car-dealers’ page$")
    public void iNavigateToCarDealersPage() {
    }
    @And("^I should see the dealer names \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealerNamesAreDisplayOnPage(String dealersName)  {
        new FindDealersPage().verifyDealerNamesAreDesplayed(dealersName);
    }

}