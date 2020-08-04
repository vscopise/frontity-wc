import React from 'react';
import { connect, styled } from 'frontity';
import FeaturedMedia from '../featured-media';
import Image from "@frontity/components/image";

const DetailImage = ({ state, id }) => {
    const media = state.source.attachment[id];

    if (!media) return null;

    const srcset =
        Object.values(media.media_details.sizes)
            // Get the url and width of each size.
            .map((item) => [item.source_url, item.width])
            // Recude them to a string with the format required by `srcset`.
            .reduce(
                (final, current, index, array) =>
                    final.concat(
                        `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
                    ),
                ""
            ) || null;

        const FeaturedImagePosX = state.theme.FeaturedImagePosX;
        const FeaturedImagePosY = state.theme.FeaturedImagePosY; 

    return (
        <Container>
            <StyledImage
                alt={media.title.rendered}
                src={media.source_url}
                srcSet={srcset}
                posX={FeaturedImagePosX}
                posY={FeaturedImagePosY}
            />
        </Container>
    )
}

export default connect(DetailImage);

const Container = styled.div`
    position: absolute;
    left: 0;
    top: 20px;
    background: #fff;
    box-shadow: 0px 0px 10px 3px #999;
    border: 1px solid black;
    overflow: hidden;
`;

const StyledImage = styled(Image)`
    object-fit: none;
    object-position: ${props => props.posX}% ${props => props.posY}%;
`;