import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            {/* Se recomienda usar el div  */}
            <div>
                <NavBar/>
                <div className="container">
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route exact path='/about' component={AboutScreen} />
                    <Route exact path='/login' component={LoginScreen} />
                    {/* Default page o 404 o usar un redirect  */}
                    {/* <Route component={HomeScreen}/> */}
                    {/* Si no encuentra ninguna de esatas condiciones redirect to / */}
                    <Redirect to='/'/>
                </Switch>
                </div>
            </div>
        </Router>
    )
}
