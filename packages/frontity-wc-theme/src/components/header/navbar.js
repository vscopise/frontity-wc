import React from 'react';
import { styled } from 'frontity';
import { animated, useSpring } from 'react-spring';
import Logo from '../../assets/logo.svg';
import Iso from '../../assets/iso.svg';
import Link from '../link';
import Navigation from './navigation';

const Logo_container = ({ size }) => {
    const src = 'iso' === size ? Iso : Logo;
    return (
        <img src={src} />
    )
};

const NavBar = ({ fixed }) => {
    const settings = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        background: 'rgba(220,220,220,0.9)',
        WebkitBoxShadow: '0 4px 6px -6px #222',
        MozBoxShadow: '0 4px 6px -6px #222',
        boxShadow: '0 4px 6px -6px #222',
        zIndex: 1,
    }

    const animateStyle = useSpring({
        transform: 'translate3d(0,0px,0)',
        from: { ...settings, transform: 'translate3d(0,-30px,0)' }
    });

    return (
        <>
            <Nav>
                <StyledLink>
                    <Link href=''>
                        <StyledImg src={Logo} />
                    </Link>
                </StyledLink>
                <Navigation />
            </Nav>
            {fixed &&
                <animated.div style={animateStyle}>
                    <Nav>
                        <StyledLink href=''>
                            <Link href=''>
                                <StyledImg src={Iso} />
                            </Link>
                        </StyledLink>
                        <Navigation />
                    </Nav>
                </animated.div>
            }
        </>
    )
};

export default NavBar;

const Nav = styled.div`
    width: 1160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
`;

const StyledLink = styled.div`
    height: 30px;
`;

const StyledImg = styled.img`
    height: 100%;
    width: auto;
`;