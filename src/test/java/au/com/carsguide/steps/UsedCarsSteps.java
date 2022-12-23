package au.com.carsguide.steps;

import au.com.carsguide.pages.UsedCarPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class UsedCarsSteps {



    @And("^I click ‘Used’ link$")
    public void iClickUsedLink()  {
        new UsedCarPage().clickOnUsedCars();
    }

    @Then("^I navigate to ‘Used Cars For Sale’ page$")
    public void iNavigateToUsedCarsForSalePage() {

    }

    @Then("^I should see the make “<make>” in results$")
    public void iShouldSeeTheMakeMakeInResults() {
    }
}
