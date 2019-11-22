import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";

import Login from '../Containers/Login'
import Register from '../Containers/Register'
import Chat from '../Containers/Chat'

import PrivateRoute from '../Containers/PrivateRoute'

import '../assets/styles/main.scss'

export default class App extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/register'} component={Register}/>
                    <PrivateRoute path={'/chat'} component={Chat}/>
                </Switch>
            </div>
        )
    }
}