import React from 'react';
import { styled, connect } from 'frontity';

const VariationsForm = ({state}) => {
    const data = state.source.get(state.router.link);
    const product = state.source[data.type][data.id];

    const { variations } = product;
    
    return (
        <Container>
            {variations.map(item => {
                return (
                <div key={item}>{item}</div>
                )
            })}
        </Container>
    )
}

export default connect(VariationsForm);

const Container = styled.div`
    margin-bottom: 20px;
`;