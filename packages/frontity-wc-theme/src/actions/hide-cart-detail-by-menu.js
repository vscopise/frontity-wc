export const hideCartDetailByMenu = ({ state }) => {
    setTimeout(() => { state.theme.showCartDetailByMenu = false }, 1000);
}