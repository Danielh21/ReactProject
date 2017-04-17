import React from 'react'
import { render } from 'react-dom'
import { App } from './componets/app'
import Member from './componets/member'
import MemberList from './componets/MemberList'

import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'

window.React = React

render(

        <MemberList />,

        /*<Member admin={true}
            name="Edna Welch"
            email="edna.welch88@example.com"
            thumbnail="https://randomuser.me/api/portraits/women/90.jpg"
            makeAdmin={(email) => console.log(email)}/>, */


/*
     <HashRouter>
        <div>
        <h1>Hello to You</h1>
            <Route exact path="/" component= {App}/>
            <Route path="/list/:filter?" component= {App}/>
            <Route exact path="/add" component= {App}/>
        </div>
    </HashRouter>,*/

    document.getElementById('reactor-container')
)