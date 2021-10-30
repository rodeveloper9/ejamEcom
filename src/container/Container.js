import React from 'react';
import Notifications from 'react-notify-toast';

const Container = (props) => (
    <div>
        <Notifications options={{ zIndex: 9999 }} className="errorToast" />
        <div className="main-content">{props.children}</div>
    </div>
);
export default Container;
