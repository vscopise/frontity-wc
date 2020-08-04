import React from 'react';
import { connect, styled } from 'frontity';
import InputField from './input-field';

const BillingDetail = ({ state }) => {
    return (
        <div>
            <Title>Billing Detail</Title>
            {state.theme.checkoutFields.map(
                field => {
                    return (
                        <InputField 
                            field={field} 
                            key={field.name} 
                        />
                    )
                }
            )}
        </div>
    )
}
export default connect(BillingDetail);

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: normal
`;