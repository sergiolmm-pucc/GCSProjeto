//import chromedriver in order for Selenium to open a Chrome browser by itself
require("chromedriver"); 

//import the following classes from Selenium
const {Builder, By, Key, until} = require('selenium-webdriver');
const {NoSuchElementError} = require('selenium-webdriver/lib/error');



async function example() {
    //open Chrome browser
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

    //go to Google's website
    await driver.get('https://geode-ink-activity.glitch.me/ht');

    try{
    // type 'webdriver' in the search box
    //var btn = driver.findElement(By.id('btn')).sendKeys('slmm API',Key.RETURN);
    
    //Locating the elements using name locator for the text box
    //driver.findElement(By.name("q")).sendKeys("YouTube");

    driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile('out.png', image, 'base64', function(err) {
                console.log(err);
            });
        }
    );
    driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile('inicio.png', image, 'base64', function(err) {
                console.log(err);
            });
        }
    );


    //name locator for google search button
    let searchIcon = driver.findElement(By.name("btn"));
    searchIcon.click();
   // Wait for 5 secs to let the dynamic content to load
   await driver.sleep(5000);
   


    
    }catch (error) {
        if (error instanceof NoSuchElementError) {
          return 'Unable to locate on page';
        }
        throw error;
    }
    finally{
        console.log('Pode terminar agora...');
        driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('fim_out.png', image, 'base64', function(err) {
                    console.log(err);
                });
            }
        );
        // printa a tela
        driver.quit();    
    }
}

example();
/*
action
  - name: gera app macos
      uses: actions/upload-artifact@v3
      with:
          name: release-macos
          # Path to the release files          
          path: *.png 


*/