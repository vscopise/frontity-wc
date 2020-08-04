export const checkoutHandler = {
    pattern: '/checkout/',
    func: ({ state }) => {
        state.source.data['/checkout/'].isCheckout = true;
    }
}