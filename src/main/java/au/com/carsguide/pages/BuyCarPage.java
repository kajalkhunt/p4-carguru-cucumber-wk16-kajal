package au.com.carsguide.pages;


import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



public class BuyCarPage extends Utility {
    private static final Logger log = LogManager.getLogger(BuyCarPage.class.getName());
    public BuyCarPage() {
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement mouseHoverOnBuyAndSell;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement clickOnSerchCars;

    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement selectMake;

    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement selectModel;

    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement selectLocation;

    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement selectPrice;

    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement FindMyNextCarButton;

    @CacheLookup
    @FindBy(xpath = "//body/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/div[6]/div[2]/div[1]/a[1]")
    WebElement verifyMake;

    public void mouseHoverOnBuyAndSell() {
        mouseHoverToElement(mouseHoverOnBuyAndSell);
        log.info("mouse Hover On Buy And Sell: " + mouseHoverOnBuyAndSell.toString());

    }

    public void clickOnSerchCars() {
        mouseHoverToElementAndClick(clickOnSerchCars);
        log.info("click On Serch Cars : " + clickOnSerchCars.toString());
    }

    public void selectMake(String make) {
        selectByVisibleTextFromDropDown(selectMake, make);
        log.info("select Make : " + selectMake.toString());
    }

    public void selectModel(String model) {
        selectByVisibleTextFromDropDown(selectModel, model);
        log.info("select Model : " + selectModel.toString());
    }


    public void selectLocation(String location) {
        selectByVisibleTextFromDropDown(selectLocation, location);
        log.info("select Location: " + selectLocation.toString());
    }

    public void selectPrice(String price) {
        selectByVisibleTextFromDropDown(selectPrice, price);
        log.info("select Price: " + selectPrice.toString());
    }

    public void clickOnFindMyNextCarButton() {
        clickOnElement(FindMyNextCarButton);
        log.info("click On Find My Next Car Button : " + FindMyNextCarButton.toString());
    }
    public String verifyingMake() {
        String expResult = getTextFromElement(verifyMake);
        return expResult;



    }

}
