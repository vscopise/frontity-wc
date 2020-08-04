import React from 'react';
import { connect, styled } from 'frontity';

const LoadingProduct = () => (<div>Loading</div>)

const OrderReviewItem = ({ state, item, index }) => {
    if (state.source.product) {
        const product = state.source.product[item.productId];
        if (product) {
            const subTotal = item.quantity * product.price;
            return (
                <>
                    <p>
                        {product.title.rendered}
                        {
                            item.quantity > 1
                                ? <span>x{item.quantity}</span> 
                                : null
                        }
                    </p>
                    <p>${subTotal}</p>
                </>
            )
        } else { return <LoadingProduct /> }
    } else { return <LoadingProduct /> }
}

export default connect(OrderReviewItem)