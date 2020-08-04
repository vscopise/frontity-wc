import React from 'react';
import { connect, styled } from 'frontity';
import { getFormattedPrice } from '../helpers/';

const PriceHtml = ({ state, price, isSale }) => {
    const {
        currencySymbol,
        priceNumDecimals,
        priceDecimalSep,
        priceThousandSep,
    } = state.theme.wcSettings;

    let formattedPrice = getFormattedPrice(
        price,
        currencySymbol,
        priceNumDecimals,
        priceDecimalSep,
        priceThousandSep
    );

    return (
        <Container isSale={isSale}>
            <Price>{formattedPrice}</Price>
        </Container>
    )
}

export default connect(PriceHtml);

const Container = styled.div`
    color: ${props => props.isSale ? '#aaa' : '#555'};
    margin-right: 10px;
    display: inline-block;    
    &:before {
        content: '';
        width: 100%;
        height: 3px;
        background-color: #aaa;
        left: 0;
        position: relative;
        display: ${props => props.isSale ? 'block' : 'none'};
        top: 15px;
    };
`;

const CurrencySymbol = styled.span`
    font-size: 0.75em;
    vertical-align: top;
    margin-top: 0.05em;
`;

const Price = styled.span``;