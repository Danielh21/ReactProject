import React from 'react'
import { render } from 'react-dom'
import { App } from './componets/app'

window.React = React

render(
     <App />,
    document.getElementById('reactor-container')
)
