import React from 'react'
import {render } from 'react-dom'
import {hello, goodbye} from './lib'

const mystyle = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamilty: 'verdana'
}

render(
    <div>
        {hello}
        {goodbye}
       </div> ,
    document.getElementById('reactor-container')
)