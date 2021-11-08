import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateLayout from '../Layout/PrivateLayout';
import PublicLayout from '../Layout/PublicLayout';
import Dashboard from '../Pages/Admin/Dashboard';
import Ventas from '../Pages/Admin/Ventas';
import Features from "../Pages/Public/Features";

const Routes = () => {
    return (
        <Router>
            <switch>
                <Route path={['/dash', '/roles', '/ventas']}>
                    <PrivateLayout>
                        <switch>
                            <Route path='/dash'>
                                <Dashboard/>
                            </Route>
                            <Route path='/Roles'>
                                <roles/>
                            </Route>
                            <Route path='/Ventas'>
                                <Ventas />
                            </Route>

                        </switch>
                    </PrivateLayout>
                </Route>
                <Route path={['/features','/']}>
                    <PublicLayout>
                        <switch>
                            <Route path= '/features'>
                                <Features/>
                            </Route>
                            <Route path= '/'>
                                
                            </Route>
                        </switch>
                        <icmd
                        cndex />
                    </PublicLayout>
                </Route>

            </switch>
        </Router>
    )
}

export default Routes
