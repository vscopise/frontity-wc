import React from 'react';
import { connect, styled } from 'frontity';

import PriceHtml from '../price-html';
import FormAddToCart from './form-add-to-cart';
import Meta from './meta';
import DetailImage from './detail-image';
import VariationsForm from './variations-form';


const Info = ({ state }) => {
    const data = state.source.get(state.router.link);
    const product = state.source[data.type][data.id];

    const { excerpt, title, price, product_type, sale_price } = product;
    
    const isSale = '' !== sale_price;
    const isVariable = 'variable' === product_type;

    const showDetailImage = state.theme.showDetailImage;

    return (
        <Container>
            <Title dangerouslySetInnerHTML={{ __html: title.rendered }} />
            <Prices>
                <PriceHtml price={price} isSale={isSale} />
                {isSale && <PriceHtml price={sale_price} isSale={!isSale} />}
            </Prices>
            <ShortDescription dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
            {isVariable && <VariationsForm />}
            <FormAddToCart />
            <Meta />
            {showDetailImage && <DetailImage id={state.theme.featuredImage} />}
        </Container>
    );
}

export default connect(Info);

const Container = styled.div`
    position: relative;
`;

const Title = styled.h1`
    font-size: 3em;
`;
const Prices = styled.div`
    font-size: 2.5em;  
`;

const ShortDescription = styled.div`
    font-size: 1.5em;
`;