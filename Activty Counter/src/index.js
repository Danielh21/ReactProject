import React from 'react'
import {render } from 'react-dom'
import {TripleDoubleCount} from './componets/TripleDoubleCounter'

window.React = React

render(
     <TripleDoubleCount total={31}
                        wins={12}
                        morethan30={12}
                        goal={42} />,
    document.getElementById('reactor-container')
);