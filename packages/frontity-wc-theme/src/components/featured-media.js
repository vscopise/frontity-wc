import React, { useEffect } from "react";
import { connect, styled, css, keyframes } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMedia = ({ state, actions, id, height = "190px", width = "100%" }) => {

  useEffect(() => {
    actions.source.fetch(`/media/${id}`);
  }, []);

  const media = state.source.attachment[id];

  if (!media) return <Loading />;

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

  return (
    <Container css={css`height: ${height}; width: ${width}; background-color: #efefef;`}>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
    </Container>
  );
};

export default connect(FeaturedMedia);

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  @media (max-width: 576px){
    width: auto !important;
  }
`;

const placeHolderShimmer = keyframes`
    0% {
        background-position: -1000px 0
    }
    100% {
        background-position: 1000px 0
    }
`;

const Loading = styled.div`
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: darkgray;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 100px;
  position: relative;  

`;
