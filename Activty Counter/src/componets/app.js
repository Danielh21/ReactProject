// acountable for state in app
import {Component } from 'react'
import {TripleDoubleCount} from './TripleDoubleCounter'
import {TripleCountList} from './TripleCountList'
import {AddTripledouble} from './AddTripledouble'
import {Menu} from './Menu'



export class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            tripleDoubles:  [
                {
                    opponent: "Golden State Warriors",
                    date: "2016-01-02",
                    win: true,
                    over30Points: false
                }
            ]
        }
        this.addNewTripleDouble = this.addNewTripleDouble.bind(this)
    }

    addNewTripleDouble(trip){
        this.setState({
            tripleDoubles: [
                ...this.state.tripleDoubles,
                trip
            ]
        })
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
            <Menu />
            {(this.props.location.pathname === "/") ?
            <TripleDoubleCount total= {this.countTripleDoubles()}
                           wins = {this.countTripleDoubles("win")}
                           morethan30 = {this.countTripleDoubles("over30Points")}
                           goal = {100}         
                                    />
            :
            (this.props.location.pathname === "/add") ?
            <AddTripledouble onNewTripleDouble = {this.addNewTripleDouble}  />
            :
            (this.props.match.path === "/list/:filter?") ? 
        <TripleCountList tripleDoubles= {this.state.tripleDoubles}
            filter= {this.props.match.params.filter}
        /> :
            null
            }
        
        </div>
        )   
    }
}