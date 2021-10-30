import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import FullPageLoader from '../components/common/loader/FullpageLoader';
const Container = lazy(() => import('../container/Container'));
const Listing = lazy(() => import('../components/listing/Listing'));
const Checkout = lazy(() => import('../components/checkout/Checkout'));

const MainView = (props) => {
    return (
        <Container>
            <Route
                exact
                path="/"
                component={Listing}
                render={() => <Redirect to="/" />}
            />
            <Route exact path="/checkout" component={Checkout} />
        </Container>
    );
};

export default function Routes(props) {
    return (
        <Router>
            <Suspense fallback={<FullPageLoader />}>
                <Switch>
                    <MainView />
                </Switch>
            </Suspense>
        </Router>
    );
}