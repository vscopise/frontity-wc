import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';
import HeaderCartDetail from './header-cart-detail';
import { FaShoppingCart } from 'react-icons/fa';

const HeaderCart = ({ state, actions }) => {
    
    return (
        <Container
            onMouseEnter={actions.theme.showCartDetailByMenu}
            onMouseLeave={actions.theme.hideCartDetailByMenu}
            onClick={actions.theme.goCheckout}
        >
            <FaShoppingCart />
            <Currency>$</Currency>
            <Price>{state.theme.cart.cartTotal}</Price>
            {(state.theme.showCartDetailByMenu || state.theme.showCartDetailBySelf) && <HeaderCartDetail />}
        </Container>
    )
}
export default connect(HeaderCart)

const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
`;
const Currency = styled.span`
    font-size: 0.6rem;
    margin: 0 3px 0 5px;
`;

const Price = styled.span`
    font-size: 0.8rem;
`;