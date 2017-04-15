import React from 'react'
import { render } from 'react-dom'
import { App } from './componets/app'
import { Whopps404 } from './componets/Whopps404'
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'

window.React = React

render(
    // <BasicExample/>,
     <HashRouter>
        <div>
        <h1>Hello to You</h1>
            <Route exact path="/" component= {App}/>
            <Route path="/list/:filter?" component= {App}/>
            <Route exact path="/add" component= {App}/>
        </div>
    </HashRouter>,

    document.getElementById('reactor-container')
)