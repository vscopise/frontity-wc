import React from 'react';
import { connect, styled } from 'frontity';

const InputField = ({ field, actions }) => {
    return (
        <div>
            <Title>{field.title}</Title>
            <Input
                name={field.name}
                value={field.value}
                onChange={event => {
                    actions.theme.setCheckoutField({
                        fieldName: field.name,
                        value: event.target.value
                    })
                }}
            />
        </div>
    )
}

export default connect(InputField);

const Title = styled.h3`
    font-weight: normal;
    font-size: 1rem;
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 100%;
`;