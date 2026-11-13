class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.productName = this.cartItems.locator('.inventory_item_name');
  }

  async getCartItemCount() {
    return await this.cartItems.count();
  }

  async getProductName() {
    return await this.productName.textContent();
  }
}

export default CartPage;