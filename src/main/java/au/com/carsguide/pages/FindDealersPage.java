package au.com.carsguide.pages;


import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;


public class FindDealersPage extends Utility {
    private static final Logger log = LogManager.getLogger(FindDealersPage.class.getName());

    public FindDealersPage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Find a Dealer')]")
    WebElement clickOnFindDealer;

    @CacheLookup
    @FindBy(xpath = "//a[@data-gtm-value='title']")
    List<WebElement> listOfDealer;

//    @CacheLookup
//    @FindBy(xpath = "//h1[contains(text(),'Find a Car Dealership Near You')]")
//    WebElement verifyDealersName;

//    @CacheLookup
//    @FindBy(xpath = "//a[contains(text(), 'Find a Dealer')]")
//    WebElement clickFindDealer;

    public void clickOnFindADealerLink() {
        clickOnElement(clickOnFindDealer);
    }

    public void verifyDealerNamesAreDesplayed(String dealers) {
        List<WebElement> list = listOfDealer;
        for (WebElement e : list) {
            System.out.println(e.getText());
            if (e.getText().equals(dealers)) {
                break;
            }
        }
    }
}


//        public void ClickDealersName() {
//        mouseHoverToElementAndClick(clickOnFindDealer);
//        log.info("Click Dealers Name : " + clickOnFindDealer.toString());
//    }
//
//
//    public String verifyDealersName() {
//        String expResult = getTextFromElement(verifyDealersName);
//        log.info("verify Dealers Name : " + verifyDealersName.toString());
//        return expResult;
//    }


