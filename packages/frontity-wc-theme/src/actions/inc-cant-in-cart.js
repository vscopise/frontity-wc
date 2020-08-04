export const incCantInCart = ({ state }) => ({ quantity }) => {
    event.preventDefault();

    state.theme.cantToAddToCart += quantity;

    state.theme.cantToAddToCart = 1 > state.theme.cantToAddToCart ? 1 : state.theme.cantToAddToCart;
}