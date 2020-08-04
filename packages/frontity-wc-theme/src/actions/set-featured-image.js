export const setFeaturedImage = ({ state }) => ({ imageId }) => {
    state.theme.featuredImage = imageId;
}