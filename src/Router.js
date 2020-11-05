import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainScreen from './pages/MainScreen/MainScreen';
import TeamForm from './pages/TeamForm/TeamForm';
import NotFoundScreen from './pages/NotFoundScreen/NotFoundScreen';

function Router() {
    return (
        <Switch>
            <Route path="/" exact component={MainScreen} />
            <Route path="/form" exact component={TeamForm} />
            <Route component={NotFoundScreen} />
        </Switch>
    );
}

export default Router;