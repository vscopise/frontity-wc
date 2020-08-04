export const afterCSR = async ({ state, actions }) => {
    if (state.frontity.platform === 'client') {
      if (0 === state.theme.cart.items.length) {
        const storedCart = localStorage.getItem(
          'frontity_wc_cart'
        );
        if (storedCart && storedCart.length !== 0) {
          state.theme.cart = JSON.parse(storedCart);
          state.theme.cart.items.map(cartItem => {
            actions.source.fetch(
              `/cart-product/${cartItem.productId}`,
            );
          })
        };
      }
    }
  }