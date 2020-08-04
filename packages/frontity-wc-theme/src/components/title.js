import React from 'react';
import { connect, Head } from 'frontity';

const Title = ({ state }) => {
    let title = state.frontity.title;
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
}

export default connect(Title);