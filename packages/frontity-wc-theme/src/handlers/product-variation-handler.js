export const fetchProductVariationHandler = {
    name: 'product-variation',
    priority: 10,
    pattern: '/product-variation/:productId',
    func: async ({ params, state, libraries }) => {
        const data = state.source.get(state.router.link);
        const product = state.source[data.type][data.id];

        let variations = product.variations;

        product.variations.map(variation => {
            // 1. get variation
            const response = await libraries.source.api.get({
                endpoint: `product/${product.id}/variation/${variation}`,
            });
    
            // 2. add media to state
            await libraries.source.populate({ response, state });
        });
        console.log('variations');

    }
}