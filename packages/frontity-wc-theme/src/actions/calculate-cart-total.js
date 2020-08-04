export const calculateCartTotal = ({ state }) => {
    let products = state.source.product;
    state.theme.cart.cartTotal = state.theme.cart.items.reduce((total, product) =>
        total + parseFloat(
            products[product.productId].price * product.quantity
        ), 0
    );
    localStorage.setItem(
        'frontity_wc_cart',
        JSON.stringify(state.theme.cart)
    );
}