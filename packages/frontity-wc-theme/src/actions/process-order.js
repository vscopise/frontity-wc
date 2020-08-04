import { fetch } from 'frontity';

export const processOrder = async ({ state, actions }) => {
    const fields = state.theme.checkoutFields;
    state.theme.processingOrder = true;
    let orderData = JSON.stringify({
        set_paid: false,
        address: {
            first_name: fields.filter(f => f.name === 'firstName')[0].value,
            last_name: fields.filter(f => f.name === 'lastName')[0].value,
            company: fields.filter(f => f.name === 'companyName')[0].value,
            address_1: fields.filter(f => f.name === 'streetAddress')[0].value,
            address_2: fields.filter(f => f.name === 'apartment')[0].value,
            city: fields.filter(f => f.name === 'city')[0].value,
            country: fields.filter(f => f.name === 'country')[0].value,
            postcode: fields.filter(f => f.name === 'postcode')[0].value,
            phone: fields.filter(f => f.name === 'phone')[0].value,
            email: fields.filter(f => f.name === 'email')[0].value,
            emnotesail: fields.filter(f => f.name === 'notes')[0].value,
        },
        line_items: state.theme.cart.items
    });

    const res = await fetch(
        //`http://test.local/wp-json/wp/v2/create_order`,
        `${state.source.api}/wp/v2/create_order`,
        {
            method: 'POST',
            body: orderData,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    const body = await res.json();

    const orderId = body.id;
    console.log('body', body);
    console.log('id', body.id);
    console.log('id', body[1]);

    state.theme.processingOrder = false;

    state.theme.cart.items = [];
    state.theme.cart.cartTotal = 0;
    fields.map(field => field.value = '');
}