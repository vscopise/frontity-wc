import React from 'react';
import { connect, styled } from 'frontity';

import Terms from './terms';

const Meta = ({ state }) => {
    const data = state.source.get(state.router.link);
    const product = state.source[data.type][data.id];
    const { product_cat, product_tag } = product;
    // const categories = state.source

    //console.log(product['product_cat'])

    return (
        <Container>
            <Terms label='Categories' term='product_cat' />
            <Terms label='Tags' term='product_tag' />
        </Container>
    )
}

export default connect(Meta);

const Container = styled.div`
    margin-bottom: 10px;
`;

const Term = styled.div`
    border-top: 1px solid #ddd;
    margin-top: 10px;
    padding-top: 5px;
`;