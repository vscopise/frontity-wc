import React from 'react';
import { styled } from 'frontity';

const Loading = () => (
    <Container>
        <StyledSpinner viewBox="0 0 50 50">
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="2"
            />
        </StyledSpinner>
    </Container>
);

export default Loading;

const Container = styled.div`
    background: rgba(255,255,255,0.9);
    display: flex;
    justify-content:center; 
    align-items:center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
`;

const StyledSpinner = styled.svg`
    animation: rotate 1s linear infinite;
    margin: 40px;
    width: 50px;
    height: 50px;
    left: 50%;
    top: 50%;

    & .path {
        stroke: #5652bf;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`;