export const placeOrder = ({ state, actions }) => {
    let error = false;
    /*state.theme.checkoutFields.map(field => {
        if (field.value === '' && field.isRequired) {
            error = true;
            state.theme.checkoutFields.find(
                f => f.name === field.name
            ).error = 'This field is required';
        }
    }); */
    if (!error) {
        actions.theme.processOrder();  
    }
}