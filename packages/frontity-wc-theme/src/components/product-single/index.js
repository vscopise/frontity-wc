import React, { useEffect } from 'react';
import { connect, styled } from 'frontity';
import MediaGallery from './media-gallery';
import Info from './info';

const Product = ({ state, actions }) => {
    const data = state.source.get(state.router.link);
    const product = state.source[data.type][data.id];

    actions.source.fetch(`/product-variation/${product.id}`);

    return (
        <Container>
            <Main>
                <MediaGallery />
                <Info />
            </Main>
            <Footer>
                Footer
            </Footer>
        </Container>
    )
}

export default connect(Product);

const Container = styled.div``;
const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    height: -webkit-fill-available;
`;
const Footer = styled.div``;