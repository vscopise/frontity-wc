export const hideCartDetailBySelf = ({ state }) => {
    setTimeout(() => { state.theme.showCartDetailBySelf = false }, 1000);
}