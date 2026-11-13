export default class CheckoutPage{
    constructor(page){
        this.page=page;
        this.firstName=page.getByPlaceholder('First Name');
        this.lastName=page.getByPlaceholder('Last Name');
        this.zipCode=page.getByPlaceholder('Zip/Postal Code');
        this.continue=page.locator('[id="continue"]');
    }

    async enterCustomerdetails(){
        
    }
}