import React from 'react';
import Notifications from 'react-notify-toast';
import Header from '../components/header/header';

const Container = (props) => (
    <div>
        <Header />
        <Notifications options={{ zIndex: 9999 }} className="errorToast" />
        <div className="main-content">{props.children}</div>
    </div>
);
export default Container;
