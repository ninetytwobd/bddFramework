package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



import TestBase.TBase;

public class Lpage extends TBase {

	// PageFactory or OR 
			//All Locator  
			@FindBy(xpath="//input[@name=\"username\"]")
			WebElement username;
			
			@FindBy(xpath="//input[@name=\"password\"]")
			WebElement password;
			
			@FindBy(xpath="//button[@class=\"btn btn-success block full-width\"]")
			WebElement loginBtn;
			
			@FindBy(xpath="//img[@class=\"logo\"]")
			WebElement TechFiosLogo;
			
			
			
			//PageFactory
			public Lpage() {
				PageFactory.initElements(driver, this);// this mean corrent class object
				
			}
			//All Action
			public String validateLogingPage() {
				return driver.getTitle();
			}
			public boolean logo() {
				return TechFiosLogo.isDisplayed();
				
			}
			
			public homepahe login1(String un, String pass) {
				username.sendKeys(un);
				password.sendKeys(pass);
				
				
				return new homepahe();
				
				
			}
			
			public void clickLogin() {
				
				loginBtn.click();
			}

			
			

}
