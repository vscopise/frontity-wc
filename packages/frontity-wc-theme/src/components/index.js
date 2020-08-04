import React from 'react';
import { connect, css, Global, styled } from 'frontity';
import Switch from "@frontity/components/switch";
import Title from './title';
import Home from './home';
import ProductList from './product-list/';
import Product from '../components/product-single/';
import Loading from './loading';
import Header from './header';
import Checkout from './checkout/';
import SideNotifications from './side-notifications';

const Theme = ({ state }) => {
    const data = state.source.get(state.router.link);
    return (
        <>
            <Title />

            <Global styles={globalStyles} />

            <Main>
                <Header />
                <Switch>
                    <Loading when={data.isFetching} /> 
                    <Home when={data.isHome || data.isFetching} /> 
                    <ProductList when={data.isProductArchive || data.isFetching} />
                    <ProductList when={data.isProductCat || data.isFetching} />
                    <Product when={data.isProduct || data.isFetching} />
                    <Checkout when={data.isCheckout || data.isFetching} />
                </Switch>
            </Main>

            <SideNotifications />
        </>
    );
}

export default connect(Theme);

const globalStyles = css`
    html {
        overflow: -moz-scrollbars-vertical; 
        overflow-y: scroll;
    }
    body {
        margin: 0;
        font-size: 10px;
        font-family: "Open Sans", sans-serif;
        color: #555555;
    }
    img {
        height: auto;
        width: 100%;
    }
`;

const Main = styled.div`
    margin: 0 auto;
    max-width: 90%;
    @media (min-width: 1280px) {
        width: 1160px;
    }
`;