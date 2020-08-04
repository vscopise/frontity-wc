export const cartProductHandler = {
    name: 'product',
    priority: 10,
    pattern: '/cart-product/:id',
    func: async ({ route, params, state, libraries }) => {
  
      // 1. get product
      const response = await libraries.source.api.get({
        endpoint: `product/${params.id}`,
      });
  
      // 2. add product to state
      const [product] = await libraries.source.populate({ response, state });
  
      // 3. add route to data
      Object.assign(state.source.data[route], { product });
    }
  }