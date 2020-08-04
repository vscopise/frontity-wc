import React from 'react';
import { styled } from 'frontity';
import { useInView } from 'react-intersection-observer';
import NavBar from './navbar';

const Header = () => {

    const [ref, inView] = useInView();

    return (
        <>
            <div ref={ref}>
                <NavBar />
            </div>
            {!inView && <NavBar fixed />}
        </>
    );
};

export default Header;