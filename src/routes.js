import { BrowserRouter, Switch, Route } from 'react-router-dom'
// BrowserRouter permite a navegação, fica com uma barra /main / repo
// Switch - Uma rota seja chamada por vez
// Nossas rotas

import React from 'react';
import Main from './pages/Main/Main';
import Repository from './pages/Repository/Repository';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}></Route>
                <Route path="/repository/:repository" component={Repository}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
