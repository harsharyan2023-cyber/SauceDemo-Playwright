export default class ProductPage {
    constructor(page){
        this.page=page;
        this.pageTitle=page.getByText('Products',{exact:true});
        this.inventoryItems=page.locator('.inventory_item ');
        this.sortDropdown=page.locator('.product_sort_container');
        this.shoppingCart=page.locator('.shopping_cart_link')
      


    }
    async verifyproductPage(){
        await this.pageTitle.waitFor();
    }
    async getProductCount(){
        return await this.inventoryItems.count();
    }
    async selectSortOption(option){
        await this.sortDropdown.selectSortOption(option);
    }
    async addProductToCart(productName){
        const product=this.page.locator('.inventory_item').filter({hasText:productName});
        await product.locator('button').click();
    }
    async openCart(){
        await this.shoppingCart.click();
    }
}
