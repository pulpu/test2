import React, { Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import noMatch from './components/noMatch'
import Home from './components/home'

class Routers extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={noMatch}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routers;