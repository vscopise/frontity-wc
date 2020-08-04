import React from 'react';
import { connect, styled } from 'frontity';

const FormAddToCart = ({ state, actions }) => {
    const data = state.source.get(state.router.link);
    const product = state.source[data.type][data.id];
    const cantToAddToCart = state.theme.cantToAddToCart;
    return (
        <Container>
            <Button 
                minus 
                onClick={event=>actions.theme.incCantInCart({
                    event, quantity: -1
                })}
            >-</Button>
            <Number 
                type="number" 
                step="1" min="1" max="" 
                name="quantity" 
                value={cantToAddToCart} 
                onChange={event => {
                    actions.theme.changeCantInCart({
                        value: event.target.value
                    })
                }}
                title="Qty" 
                size="4" 
                pattern="" 
                inputmode="" 
            />
            <Button 
                plus
                onClick={event=>actions.theme.incCantInCart({
                    event, quantity: 1
                })}
            >+</Button>
            <AddToCart
                onClick={event => actions.theme.addToCart({
                    event, productId: product.id
                })}
            >Add to Cart</AddToCart>
        </Container>
    )
}

export default connect(FormAddToCart);

const Container = styled.div`
    display: inline-block;
    text-align: left;
    position: relative;
    white-space: nowrap;
    vertical-align: top;
    margin-bottom: 1em;
    & input {
        display: inline-block;
        margin: 0;
        vertical-align: top;
        box-shadow: none;
    }
    & button {
        height: 41px;
        border: 1px solid #efefef;
        cursor:pointer;
    }
`;

const Button = styled.button`
    padding: 7px 10px 8px;
    background-color: #f9f9f9;
    border-right: ${props => props.minus ? 'none !important': 'solid'};
    border-left: ${props => props.plus ? 'none !important': 'solid'};
    &:focus {
        outline: none;
    };
    &:hover {
        background: #f1f1f1;
    }
`;

const Number = styled.input`
font-size: 1.2em;
    width: 35px;
    height: 39px;
    padding: 0 5px;
    text-align: center;
    background-color: transparent;
    border: 1px solid #efefef;
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }  
`;

const AddToCart = styled.button`
    font-weight: bolder;
    font-size: 1.2em;
    text-transform: uppercase;
    margin-left: 2em;
    background-color: #D26E60;
    color: white;
    font-size: 1em;
    padding: 0 1.2em;
    transition: transform .3s,border .3s,background .3s,box-shadow .3s,opacity .3s,color .3s;
    &:hover {
        background-color: #D26E60;
        outline: none;
        opacity: 1;
        box-shadow: inset 0 0 0 100px rgba(0,0,0,.2);
    }
`;