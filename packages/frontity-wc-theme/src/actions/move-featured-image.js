export const moveFeaturedImage = ({ state }) => ({ event }) => {
    const offsetLeft = event.target.offsetLeft;
    const offsetWidth = event.target.offsetWidth;
    const clientX = event.clientX;

    const offsetTop = event.target.offsetTop;
    const offsetHeight = event.target.offsetHeight;
    const clientY = event.clientY;

    state.theme.FeaturedImagePosX = parseInt(clientX * 100 / offsetWidth - 100 * offsetLeft / offsetWidth);
    state.theme.FeaturedImagePosY = parseInt(clientY * 100 / offsetHeight - 100 * offsetTop / offsetHeight);
}