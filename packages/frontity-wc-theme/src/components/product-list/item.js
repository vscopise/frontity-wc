import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';
import FeaturedMedia from '../featured-media';

import { getFormattedPrice } from '../../helpers/';

const Item = ({ state, item }) => {
    const { featured_media, link, price, title } = item;
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
        <Container>
            <Link link={link}>
                <FeaturedMedia id={featured_media} height='300px' />
                <Title
                    dangerouslySetInnerHTML={
                        { __html: title.rendered }
                    }
                />
                <Price>{formattedPrice}</Price>
            </Link>
        </Container>
    );
};

export default connect(Item);

const Container = styled.div`
    padding: 0 10px;
    margin-bottom: 20px;
    flex: 1;
    & h3 {
        margin:0;
        color: #555;
    };
    & a:hover {
        text-decoration: none;
    };
`;

const Title = styled.h3`
    padding-top: 15px;
    font-weight: normal;
    font-size: 1em;
    color: #777;
`;

const Price = styled.h3`
    padding-top: 5px;
`;