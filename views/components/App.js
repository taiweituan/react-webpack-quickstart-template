import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './common/Header';
import HomePage from './pages/HomePage';

import {Container} from 'react-bootstrap';
import history from '../history';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Container fluid>
                            <Switch>
                                <Route path="/" exact component={HomePage}></Route>
                                {/* <Route path="/todos/new" component={TodoCreate}></Route>
                                <Route path="/todos/delete/:id" component={TodoDelete}></Route>
                                <Route path="/todos/edit/:id" component={TodoEdit}></Route> */}
                            </Switch>
                        </Container>
                    </div>
                </Router>
            </div>
        );
    }
}
