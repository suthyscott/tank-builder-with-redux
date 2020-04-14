import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import MyTanks from './components/MyTanks'

export default (
    <Switch>
        <Route exact path = '/' component={Landing}/>
        <Route path = '/mytanks' component={MyTanks}/>
    </Switch>
)