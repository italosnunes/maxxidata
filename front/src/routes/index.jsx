import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProfessionalType from '../pages/ProfessionalType';
import Professional from '../pages/Professional';

const Routes = () => (
    
    <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/professional-type">
            <ProfessionalType/>
        </Route>
        <Route path="/professional">
            <Professional/>
        </Route>
    </Switch>
    
)

export default Routes;
