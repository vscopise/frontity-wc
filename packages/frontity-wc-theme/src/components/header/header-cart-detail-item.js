import React from 'react';
import { styled, connect } from 'frontity';
import { getFormattedPrice } from '../../helpers/';
import FeaturedMedia from '../featured-media';

const HeaderCartDetailItem = ({ state, actions, item }) => {
    const {
        currencySymbol,
        priceNumDecimals,
        priceDecimalSep,
        priceThousandSep,
    } = state.theme.wcSettings;

    if (state.source.product) {
        const product = state.source.product[item.productId];
        if (product) {
            let { featured_media, price, title } = product;
            let formattedPrice = getFormattedPrice(
                price, 
                currencySymbol, 
                priceNumDecimals, 
                priceDecimalSep, 
                priceThousandSep
            );
            let quantity = 1 < item.quantity ? `${item.quantity} x ` : '';
            actions.source.fetch(`/media/${featured_media}`);
            return (
                <Container>
                    <ImageContainer>
                        <FeaturedMedia id={featured_media} height='60px' />
                    </ImageContainer>
                    <InfoContainer>
                        <Title
                            dangerouslySetInnerHTML={
                                { __html: title.rendered }
                            }
                        />
                        <Price>
                            <span>{quantity}</span>{formattedPrice}
                        </Price>
                    </InfoContainer>
                    <CloseContainer
                        onClick={event => actions.theme.trashCartItem({
                            event, productId: item.productId
                        })}
                    >
                    x</CloseContainer>
                </Container>
            )
        } else { return <div>LLLLoading</div> }
    } else { return <div>Loading</div> }
}

export default connect(HeaderCartDetailItem);

const Container = styled.div`
    display: grid;
    grid-template-columns: 45px 1fr 30px;
    column-gap: 10px;
    align-items: center;
    height: 70px;
    margin: 0 0 5px;
    padding: 0 0 5px;
    border-bottom: 1px solid #eee;
`;

const ImageContainer = styled.div`
    
`;

const InfoContainer = styled.div`
`;

const Title = styled.h3`
    margin: 0 0 5px;
    padding: 0;
    font-weight: normal;
    font-size: 1.3em;
    color: #555;
`;

const Price = styled.h4`
    margin: 0;
    padding: 0;
    & span {
        color: #999;
        font-weight: normal;
    }
`;

const CloseContainer = styled.div`
    text-align: center;
    color: #fff;
    background-color: #ddd;
    border-radius: 50%;
    height: 30px;
    font-size: 19px;
    line-height: 29px;
    cursor: pointer;
    & :hover {
        color: #555;
    }
`;