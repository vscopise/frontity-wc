export const trashCartItem = ({ state, actions }) => ({ event, productId }) => {
    event.preventDefault();
    state.theme.cart.items = state.theme.cart.items.filter(
        item => item.productId !== productId
    );
    actions.theme.calculateCartTotal();
}