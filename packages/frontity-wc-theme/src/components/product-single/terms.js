import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';

const Terms = ({ state, actions, label, term }) => {
    const data = state.source.get(state.router.link);
    const product = state.source[data.type][data.id];

    const items = product[term];

    if (0===items.length) return null;

    return (
        <Container>
            <Label>{label}: </Label>
            {
                items.map(item => {
                    const termName = state.source[term][item].name;
                    const termSlug = state.source[term][item].slug;
                    return (
                        <Link link={`/${term}/${termSlug}`} key={item}>
                            <Term key={item}>{termName}</Term>
                        </Link>
                    )
                })
            }
        </Container>
    );
};

export default connect(Terms);

const Container = styled.div`
    border-top: 1px solid #ddd;
    padding-top: 5px;
    margin-top: 5px;
    font-size: 1.5em;
    & a {
        color: #555;
        &:after {
            content: ', ';
        }
        &:last-child {
            &:after {
                content: ''
            }
        }
        : hover {
            text-decoration: none;
        }
    }
`;

const Label = styled.span`
    color: #999;
`;

const Term = styled.span`
    
    
`;