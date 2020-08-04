import React, {useEffect} from 'react';
import { connect, styled } from 'frontity';
import FeaturedMedia from '../featured-media';

const MediaThumbnails = ({ state, actions }) => {
    const data = state.source.get(state.router.link);
    const product = state.source[data.type][data.id];
    const gallery = product.product_image_gallery;

    if (!gallery) return <Container />;

    return (
        <Container>
            {gallery.split(',').map(item => {
                return (
                    <ThumbContainer key={item}
                        onClick={ event => actions.theme.setFeaturedImage({
                            event, imageId: item
                        })}
                    >
                        <FeaturedMedia 
                            id={item} 
                            height='100px'
                        />
                    </ThumbContainer>
                )
            })}
        </Container>
    )
}

export default connect(MediaThumbnails);

const Container = styled.div`
    
`;

const ThumbContainer = styled.div`
    height: 100px;
    margin-bottom: 10px;
`;
