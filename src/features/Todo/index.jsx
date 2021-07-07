import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetilPage';
import NotFound from '../../components/NotFound';


TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact/>
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact/>

                <Route component={NotFound}/>
            </Switch>
        </div>

    );
}

export default TodoFeature;