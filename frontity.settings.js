const settings = {
  name: 'frontity-wc',
  state: {
    frontity: {
      url: 'http://wp.laotramirada.com.uy',
      //url: 'http://test.local',
      title: 'Frontity Woocommerce Theme',
      description: 'WordPress installation for Frontity development'
    }
  },
  'packages': [
    {
      name: 'frontity-wc-theme',
      state: {
        theme: {
          
          menu: [
            ['Home', '/'],
            ['Shop', '/product/'],
            ['Tshirts', '/product_cat/tshirts/'],
            ['Accessories', '/product_cat/accessories/'],
          ],
          featured: {
            showOnList: false,
            showOnPost: false
          },
          
          
          
        }
      }
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api: 'http://wp.laotramirada.com.uy/wp-json',
          //api: 'http://test.local/wp-json',
          postTypes: [
            {
              type: 'product',
              endpoint: 'product',
              archive: '/product'
            }
          ],
          taxonomies: [
            {
              taxonomy: 'product_cat',
              endpoint: 'product_cat',
              postTypeEndpoint: 'product',
              params: {
                per_page: 5,
                _embed: true
              }
            },
            {
              taxonomy: 'product_tag',
              endpoint: 'product_tag',
              postTypeEndpoint: 'product',
              params: {
                per_page: 5,
                _embed: true
              }
            },
          ]
        }
      }
    },
    '@frontity/tiny-router',
    '@frontity/html2react'
  ]
};

export default settings;