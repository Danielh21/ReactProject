import PropTypes from 'prop-types'
import {Component} from 'react'

const oppList = [
    "Golden State",
    "Cleveland Cavs",
    "Los Angeles Clippers",
    "San Antonio Spurs",
    "Washington Wizards"
]

class AutoComplete extends Component{
    get value(){
        return this.refs.inputOpp.value
    }

    set value(inputValue){
        this.refs.inputOpp.value = inputValue
    }
    render() {
        return(
            <div>
                <input ref= "inputOpp" 
                        type="text" 
                        list="opp-list"/>
                <datalist id="opp-list">
                    {this.props.options.map(
                        (opt,i) =>
                            <option key={i}>{opt}</option>
                        
                    )}
                </datalist>
            </div>
        )
    }
}





export const AddTripledouble = ({opponent, 
                                date, 
                                win, 
                                over30Points,
                                onNewTripleDouble}) =>{

    let _opponent, _date, _win, _over30Points

    function submit(e){
        e.preventDefault()
        onNewTripleDouble({
            opponent : _opponent.value,
            date: _date.value,
            win: _win.checked,
            over30Points: _over30Points.checked
        })
        _date.value = ""
        _opponent.value = ""
        _over30Points = false
        _win = false

    }
    
    return(
            <form onSubmit = {submit} className="tripleDoubleForm">
                <label htmlFor="opponent">Opponent</label>
                <AutoComplete options={oppList}
                                ref = {input => _opponent = input}/>
                <div>
                    <label htmlFor="date">Date</label>
                    <input id ="date" type="text" required
                    defaultValue= {date}
                    ref = {input => _date = input}/>
                </div>

                <div>
                    <label htmlFor="win">Win</label>
                    <input id ="win" type="checkbox"
                    defaultChecked = {win}
                    ref = {input => _win = input}/>
                </div>
                <div>
                    <label htmlFor="over30Points">over 30 Points</label>
                    <input id ="over30Points" type="checkbox" 
                    defaultChecked = {over30Points}
                    ref = {input => _over30Points = input}/>
                </div>
                <button>Add Triple Double</button>
            </form>
        ) 
}


AddTripledouble.defaultProps = {
    opponent : "Golden State",
    date : "2017-02-12",
    win: true,
    over30Points: false
}

AddTripledouble.propTypes = {
    opponent: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    win : PropTypes.bool.isRequired,
    over30Points: PropTypes.bool.isRequired
}
