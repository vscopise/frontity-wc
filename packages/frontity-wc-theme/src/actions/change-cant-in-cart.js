export const changeCantInCart = ({ state }) => ({ value }) => {
    event.preventDefault();

    state.theme.cantToAddToCart = 1 > state.theme.cantToAddToCart ? 1 : value;
}