package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



import TestBase.TBase;


	
	public class ProductsNServicesPage extends TBase {
		
		@FindBy(xpath="//input[@id=\"name\"]")
		WebElement TypeName;
		
		@FindBy(xpath="//input[@id=\"sales_price\"]")
		WebElement salesprice;
		
		@FindBy(xpath="//input[@id=\"item_number\"]")
		WebElement itemnumber;
		
		@FindBy(xpath="//textarea[@class=\"form-control\"]")
		WebElement Description;
		
		public ProductsNServicesPage() {
			PageFactory.initElements(driver, this);

	}
		public void newService(String name, String saleprice, String iitemnumber, String description) {
			TypeName.sendKeys(name);
			salesprice.sendKeys(saleprice);
			itemnumber.clear();
			itemnumber.sendKeys(iitemnumber);
			Description.sendKeys(description);
	}
	}



