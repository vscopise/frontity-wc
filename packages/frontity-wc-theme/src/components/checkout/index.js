import React from 'react';
import { styled } from 'frontity';
import BillingDetail from './billing-detail';
import OrderReview from './order-review';

const Checkout = ({state}) => {
    return (
        <Container>
            <BillingDetail />
            <OrderReview />
        </Container>
    )
}

export default Checkout;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    height: -webkit-fill-available;
`;