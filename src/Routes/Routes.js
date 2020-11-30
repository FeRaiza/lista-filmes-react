import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home'
import Filmes from '../Pages/Filmes'
import Sobre from '../Pages/Sobre'

function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/filmes" component={Filmes}></Route>
            <Route path="/sobre" component={Sobre}></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes