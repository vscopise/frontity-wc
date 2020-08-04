import React from 'react';
import { connect, styled } from 'frontity';
import { getFormattedPrice } from '../../helpers/';
import HeaderCartDetailItem from './header-cart-detail-item';

const HeaderCartDetail = ({ state, actions }) => {
    const {
        currencySymbol,
        priceNumDecimals,
        priceDecimalSep,
        priceThousandSep,
    } = state.theme.wcSettings;

    let cartTotal = state.theme.cart.cartTotal;

    let formattedPrice = getFormattedPrice(
        cartTotal, 
        currencySymbol, 
        priceNumDecimals, 
        priceDecimalSep, 
        priceThousandSep
    );
    return (
        <Container
            onMouseEnter={event => actions.theme.showCartDetailBySelf(event)}
            onMouseLeave={event => actions.theme.hideCartDetailBySelf(event)}
        >
            {state.theme.cart.items.map(item => {
                return (
                    <HeaderCartDetailItem
                        key={item.productId}
                        item={item}
                    />
                )
            })}
            <Total>
                <span>Total:</span> {formattedPrice}
            </Total>
        </Container>
    )
}

export default connect(HeaderCartDetail);

const Container = styled.div`
    position: absolute;
    top: 20px;
    right: -30px;
    width: 260px;
    padding: 10px;
    background: #fff;
    font-size: 0.8rem;
    box-shadow: 1px 1px 15px rgba(0,0,0,0.15);
    z-index: 4;
`;

const Total = styled.h2`
    text-align: center;
    & span {
        font-weight: normal;
        color: #999;
    }
`;