import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';
import HeaderCart from './header-cart';

const Navigation = ({ state }) => {
    return (
        <Container>
            {state.theme.menu.map(([name, link]) => {
                return (
                    <StyledLink key={name}>
                        <Link link={link}>
                            {name}
                        </Link>
                    </StyledLink>
                )
            })}
            {
                state.theme.cart.items.length > 0 && <HeaderCart />
            }

        </Container>
    )
}

export default connect(Navigation);

const Container = styled.div`
    display: inline-flex;
`;

const StyledLink = styled.div`
    padding: 0 20px;
`;