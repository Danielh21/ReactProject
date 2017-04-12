// acountable for state in app
import {Component } from 'react'
import {TripleDoubleCount} from './TripleDoubleCounter'
import {TripleCountList} from './TripleCountList'


export class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            tripleDoubles:  [
                {
                    opponent: "Golden State Warriors",
                    date: new Date ("9/29/2016"),
                    win: true,
                    over30Points: false
                },
                {
                    opponent: "Cleveland Cavaliers",
                    date: new Date ("2/12/2016"),
                    win: true,
                    over30Points: true
                },
                {
                    opponent: "Boston Celtics",
                    date: new Date ("12/2/2016"),
                    win: false,
                    over30Points: true
                }
            ]
        }
    }  
    countTripleDoubles(filter){
        return this.state.tripleDoubles.filter((tripD)=>{
            if(filter){
                return tripD[filter]
            } else{
                return tripD
            }
        }).length
    }

    render(){
        return (
        <div className="app">
        <TripleCountList tripleDoubles= {this.state.tripleDoubles}/>
        <TripleDoubleCount total= {this.countTripleDoubles()}
                           wins = {this.countTripleDoubles("win")}
                           morethan30 = {this.countTripleDoubles("over30Points")}
                           goal = {100}         
                                    />
        </div>
        )   
    }
}