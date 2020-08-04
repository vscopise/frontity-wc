export const goCheckout = ({ state, actions }) => {
    actions.router.set('/checkout/');
    state.theme.showModal = false;
}