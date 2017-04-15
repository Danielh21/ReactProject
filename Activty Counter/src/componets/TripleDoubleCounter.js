import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/Calendar'
import PropTypes from 'prop-types'

const precentToDecimal = (decimal) =>{
    return ((decimal * 100) + '%');
}

const calcGoalProgress = (total, goal) =>{
    return precentToDecimal(total / goal)
}

const TripleDoubleCount = ({total, wins, morethan30 ,goal}) => (


    <div className="ski-day-count">
        <div className="total-days">
            <span>{total} Triple Doubles    </span>
            <Calendar />
        </div>
        <div className="powder-days">
            <SnowFlake />
            <span> {wins} Wins </span>
        </div>
        <div className="backcountry-days">
            <span> {morethan30} More than 30 points</span>
            <Terrain />
        </div>
        <div>
            <span> {calcGoalProgress(
                total,
                goal)}</span>
        </div>
    </div>
)

TripleDoubleCount.propTypes = {
    total: PropTypes.number,
    wins: PropTypes.number,
    morethan30 : PropTypes.number,
    goal: PropTypes.number
}



module.exports.TripleDoubleCount = TripleDoubleCount