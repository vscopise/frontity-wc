import React, {useEffect} from 'react';
import { connect, styled } from 'frontity';
import FeaturedMedia from '../featured-media';
import MediaThumbnails from './media-thumbnails';

const MediaGallery = ({ state, actions }) => {
    
    const data = state.source.get(state.router.link);
    const product = state.source[data.type][data.id];

    useEffect(() => {
        actions.theme.setFeaturedImage({
            imageId: product.featured_media
        });
    }, []);

    if (false === state.theme.featuredImage) {
        actions.theme.setFeaturedImage({imageId: product.featured_media})
    }
    
    return (
        <Container>
            <MediaThumbnails />
            <ImageContainer
                onMouseEnter={actions.theme.showDetailImage}
                onMouseLeave={actions.theme.hideDetailImage}
                onMouseMove={event => actions.theme.moveFeaturedImage({ event })}    
            >
                <FeaturedMedia id={state.theme.featuredImage} height='500px' />
            </ImageContainer>
        </Container>
    );
}

export default connect(MediaGallery);

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 10px;
    padding-top: 2em;
`;
const ImageContainer = styled.div`
    height: 500px;
    margin-bottom: 20px;
`;