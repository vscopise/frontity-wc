export const setCheckoutField = ({ state }) => ({ fieldName, value }) => {
    const field = state.theme.checkoutFields.find(
        field => field.name === fieldName
    );
    field.value = value;
    field.error = false;
}