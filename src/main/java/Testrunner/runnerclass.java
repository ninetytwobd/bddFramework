package Testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\jahan\\eclipse-workspace\\ebay\\src\\main\\java\\Features\\L.feature", 
		glue={"Setpdefi"}, 
		format= {"pretty","html:test-outout", "json:json_output/cucumber.json"},
		
		tags = {"@n"}			
		)

public class runnerclass {

}
