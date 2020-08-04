import React from 'react';
import { connect, styled } from 'frontity';
import Item from './item';
import Sidebar from '../sidebar/';

const ProductList = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <Container>
            <Sidebar />
            <Grid>
                {data.items.map(({ type, id }) => {
                    const item = state.source[type][id];
                    return (<Item key={id} item={item} />)
                })}
            </Grid>
        </Container>
    )
}

export default connect(ProductList);

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding-top: 20px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    height: 100vh;
`;