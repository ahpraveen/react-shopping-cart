/**
 * End to End Test Case (Sample):
 * 1/ Launch the application 
 * 2/ Add any one item to a card
 * 3/ click checkout
 * 4/ Popup message should be displayed
 */
describe('shopping cart end to end test demo', function(){
    console.log('Starting the end to end test');
     it('launch the application, add a item and checkout', function(){
        browser.waitForAngularEnabled(false);
        //launch the application      
        browser.get('http://localhost:3000/');
        expect(browser.getTitle()).toEqual('React Shopping Cart');
        var product = element(by.css('div[data-sku ="12064273040195392"]'));
        var title = product.element(by.css('p[class="shelf-item__title"]')).getText();
        var price = product.element(by.css('div[class="val"]')).getText();  
        expect(title).toEqual('Cat Tee Black T-Shirt');
        
        // Add item
        product.click();
        var no_of_items = element(by.css('span[class="bag__quantity"]')).getText();
        var name_of_the_item = element(by.css('p[class="title"]')).getText();
        expect(name_of_the_item).toEqual('Cat Tee Black T-Shirt');
        expect(no_of_items).toEqual('1');

        // click checkout
        element(by.css('div[class="buy-btn"]')).click();     

        // Verify Alert
        var alert = browser.driver.switchTo().alert();
        alert.getText().then(text => console.log(`Text is ${text}`));
        var alertMessage = alert.getText();
        expect(alertMessage).toEqual('Checkout - Subtotal: $ 10.90');
        alert.accept();      
        console.log("end of the test"); 
    });
});