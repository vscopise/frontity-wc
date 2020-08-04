export const addToCart = ({ state, actions }) => ({ event, productId }) => {
    event.preventDefault();
    
    const productInCart = state.theme.cart.items.findIndex(
        product => product.productId === productId
    );

    let cantToAdd = state.theme.cantToAddToCart;
    
    if (-1 === productInCart) {
        state.theme.cart.items.push({ productId, quantity: cantToAdd });
    } else {
        let quantity = state.theme.cart.items[productInCart].quantity
        state.theme.cart.items[productInCart].quantity = quantity + cantToAdd;
    }
    
    const productName = state.source.product[productId].title.rendered
    
    actions.theme.openNotifications({
        content: `${productName} has been added to your cart.`
    });
    
    actions.theme.calculateCartTotal();

    state.theme.cantToAddToCart = 1
}