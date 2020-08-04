import React from 'react';
import { connect, styled } from 'frontity';
import { FaTimes } from 'react-icons/fa';

const SideNotifications = ({ state, actions }) => {

    const showNotifications = state.theme.showNotifications;

    const notificationContent = state.theme.notificationsContent;

    return (
        <Container showNotifications={showNotifications}>
                <Close onClick={actions.theme.closeNotifications}>
                    <FaTimes />
                </Close>
            <Content>
                {notificationContent}
            </Content>
        </Container>
    )
}

export default connect(SideNotifications);

const Container = styled.div`
    position: fixed;
    width: 300px;
    max-width: 85%;
    left: ${props => props.showNotifications ? `0` : `-340px`};
    box-shadow: 0px 0px 10px 3px black;
    background-color: #fefefe;
    border-right: 1px solid black;
    height: 100vh;
    top: 0px;
    z-index: 10;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    padding: 15px;
    display: flex;
`;

const Close = styled.div`
    font-size: 2em;
    position: absolute;
    right: 15px;
    cursor: pointer;
    top: 15px;
`;

const Content = styled.div`
    position: relative;
    font-size: 2em;
    margin-top: 15px;
`;