//import chromedriver in order for Selenium to open a Chrome browser by itself
//require("chromedriver"); 
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
//import the following classes from Selenium
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const {NoSuchElementError} = require('selenium-webdriver/lib/error');
const screen = { width: 1024, height: 720};


async function example() {
    //open Chrome browser
    //let driver = await new Builder()
    //    .forBrowser('chrome')
    //    .build();
     console.log("Iniciando");

    var capabilities = webdriver.Capabilities.chrome();
    capabilities.set('chromeOptions', {'args': ['--no-sandbox']});

    let driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .withCapabilities(capabilities)
        .setChromeOptions( new chrome.Options().headless().windowSize(screen))
        .build()
    console.log("driver criado");

    await driver.sleep(35000);
    
    //go to Google's website
    await driver.get('https://geode-ink-activity.glitch.me/ht');

    try{
    // type 'webdriver' in the search box
    //var btn = driver.findElement(By.id('btn')).sendKeys('slmm API',Key.RETURN);
    
    //Locating the elements using name locator for the text box
    //driver.findElement(By.name("q")).sendKeys("YouTube");

    driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile('inicio.png', image, 'base64', function(err) {
                console.log("erro"+ err);
            });
        }
    );

    //name locator for google search button
    try{    
    let searchIcon = driver.findElement(By.id("btn"));
    searchIcon.click();
    }catch(error){
        console.log("erro no botao");
    }
        
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
