import Theme from './components';

import { addToCart } from './actions/add-to-cart';
import { openNotifications } from './actions/open-notifications';
import { closeNotifications } from './actions/close-notifications';
import { calculateCartTotal } from './actions/calculate-cart-total';
import { showCartDetailByMenu } from './actions/show-cart-detail-by-menu';
import { showCartDetailBySelf } from './actions/show-cart-detail-by-self';
import { hideCartDetailByMenu } from './actions/hide-cart-detail-by-menu';
import { hideCartDetailBySelf } from './actions/hide-cart-detail-by-self';
import { goCheckout } from './actions/go-checkout';
import { setCheckoutField } from './actions/set-checkout-field';
import { placeOrder } from './actions/place-order';
import { processOrder } from './actions/process-order';
import { afterCSR } from './actions/after-csr';
import { changeCantInCart } from './actions/change-cant-in-cart';
import { incCantInCart } from './actions/inc-cant-in-cart';
import { trashCartItem } from './actions/trash-cart-item';
import { moveFeaturedImage } from './actions/move-featured-image';
import { showDetailImage} from './actions/show-detail-image';
import { hideDetailImage} from './actions/hide-detail-image';
import { setFeaturedImage } from './actions/set-featured-image';

import {checkoutHandler} from './handlers/checkout-handler';  
import {cartProductHandler} from './handlers/cart-product-handler';
import {fetchMediaHandler} from './handlers/fetch-media-handler';
//import {fetchProductVariationHandler} from './handlers/product-variation-handler';

export default {
  name: 'frontity-wc-theme',
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      cart: {
        items: [],
        cartTotal: 0,
      },
      showCartDetailByMenu: false,
      showCartDetailBySelf: false,
      showNotifications: false,
      processingOrder: false,
      notificationsContent: '',
      cartTotal: 0,
      cantToAddToCart: 1,
      featuredImage: false,
      showDetailImage: false,
      checkoutFields: [
        { name: 'firstName', title: 'First Name', value: '', error: false, half: true, isRequired: false },
        { name: 'lastName', title: 'Last Name', value: '', error: false, half: true, isRequired: false },
        { name: 'companyName', title: 'Company Name', value: '', error: false, half: false, isRequired: false },
        { name: 'streetAddress', title: 'Street', value: '', error: false, half: false, isRequired: false },
        { name: 'apartment', title: 'Apartment', value: '', error: false, half: false, isRequired: false },
        { name: 'city', title: 'City', value: '', error: false, half: false, isRequired: false },
        { name: 'country', title: 'Country', value: '', error: false, half: false, isRequired: false },
        { name: 'postcode', title: 'Post Code', value: '', error: false, half: false, isRequired: false },
        { name: 'phone', title: 'Phone', value: '', error: false, half: false, isRequired: false },
        { name: 'email', title: 'Email', value: '', error: false, half: false, isRequired: true },
        { name: 'notes', title: 'Notes', value: '', error: false, half: false, isRequired: false },
      ],
      wcSettings: {
        currencySymbol: '$',
        priceNumDecimals: 2,
        priceDecimalSep: ',',
        priceThousandSep: '.',
      },
    }
  },
  actions: {
    theme: {
      afterCSR,
      addToCart,
      openNotifications,
      closeNotifications,
      calculateCartTotal,
      showCartDetailByMenu,
      hideCartDetailByMenu,
      showCartDetailBySelf,
      hideCartDetailBySelf,
      goCheckout,
      setCheckoutField,
      placeOrder,
      processOrder,
      changeCantInCart,
      incCantInCart,
      trashCartItem,
      moveFeaturedImage,
      showDetailImage,
      hideDetailImage,
      setFeaturedImage,
    }
  },
  libraries: {
    source: {
      handlers: [
        checkoutHandler,
        cartProductHandler,
        fetchMediaHandler,
        //fetchProductVariationHandler,
      ]
    }
  }
};
