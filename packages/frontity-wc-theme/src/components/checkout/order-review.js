import React from 'react';
import { connect, styled } from 'frontity';
import OrderReviewItem from './order-review-item';

const OrderReview = ({ state, actions }) => {
    return (
        <Container>
            <Title>Your Order</Title>
            {state.theme.cart.items.map((item, index) => {
                return (
                    <OrderReviewItem
                        key={item.productId}
                        item={item}
                        index={index}
                    />
                )
            }
            )}
            <button
                onClick={actions.theme.placeOrder}
            >Place Order</button>
        </Container>
    )
}

export default connect(OrderReview);

const Container = styled.div``;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: normal
`;