package Setpdefi;

import org.junit.Assert;

import Pages.Lpage;
import Pages.ProductsNServicesPage;
import Pages.homepahe;
import TestBase.TBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Lstepdefinition extends TBase{
	homepahe home = new homepahe();
	Lpage lpage;
	ProductsNServicesPage productsNServicesPage;

	
	
	 static TBase tbase;   
	@Before
	public void eetUp() {
		TBase.initialization1();
		
		}
	@After
	public void tearDown() {
		driver.quit();
	}
	
	@Given("^User already on login page$")
	public void user_already_on_login_page() {
		lpage = new Lpage();
		
	}
	
	@Then("^Verify Title of the page$")
	public void Verify_Title_of_the_page() {
		String title = lpage.validateLogingPage();
		Assert.assertEquals(title, "Login - TechFios Test Application - Billing");
		
		
	}
	@Then("^Verify logo of the page$")
	public void Verify_logo_of_the_page() {
		boolean logo = lpage.logo();
		Assert.assertTrue(logo);
		
		
		
	}

	@Then("^User enter \"(.*)\" and \"(.*)\"$")
	public void user_enter_username_and_password(String username,String password) {
		home=lpage.login1(username, password);
	}

	@Then("^User click login button$")
	public void user_click_login_button(){
		lpage.clickLogin();
	}
	@Then("^Title of the Home page$")
	public void Title_of_the_Home_page(){
		String T= home.verifyHomePageTitle();
		Assert.assertEquals(T,"Dashboard- TechFios Test Application - Billing");
		
	}
	
	@Then("^User click ProductsNServices$")
	public void User_click_ProductsNServices(){
		home.clickProductsServices();
	}
	@Then("^User click NewServices$")
	public void User_click_NewServices() throws Exception{
		Thread.sleep(6000);
		home.clickNewService();
	}
	@Then("^User type \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void User_enter_Name_and_salesprice_and_itemnumber_and_Description(String name,String saleprice,String itemnumber,String description){
		productsNServicesPage = new ProductsNServicesPage();
		productsNServicesPage.newService(name, saleprice, itemnumber, description);
		
	}
	@Then("^User click submit$")
	public void User_click_submit(){
		home.ordersubmit();
	}
	
		
	}


