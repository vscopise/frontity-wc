export const openNotifications = ({ state }) => ({content}) => {
    state.theme.showNotifications = true;
    state.theme.notificationsContent = content;
    setTimeout(() => { state.theme.showNotifications = false }, 500000);
}