import React from 'react';
import { connect, styled } from 'frontity';

const Link = ({ 
    actions, 
    link,
    className, 
    children, 
    'aria-current': ariaCurrent
}) => {
    const onClick = event => {
        if (link.startsWith("http")) return;
        event.preventDefault();
        actions.router.set(link);
        window.scrollTo(0, 0);
    }
    return (
        <Anchor
            href={link}
            onClick={onClick}
            className={className}
            aria-current={ariaCurrent}
        >{children}</Anchor>
    );
}

export default connect(Link);

const Anchor = styled.a`
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
    & :hover {
        text-decoration: underline;
    }
`;