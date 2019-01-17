import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <Route path="/dashboard" component={DashboardPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;
