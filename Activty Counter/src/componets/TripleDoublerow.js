import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import {PropTypes} from 'react'

export const TripleDoubleRow = ({opponent, 
                        date, win, over30Points}) => (
    <tr>
        <td>
            {date.getMonth()+1} / {date.getDate()}/
            {date.getFullYear()}
        </td>
        <td>
            {opponent}
        </td>
        <td>
            {(win) ? <SnowFlake/> : null}
        </td>
        <td>
            {(over30Points) ? <Terrain/> : null}
        </td>
    </tr>

)

TripleDoubleRow.propTypes = {
    opponent : PropTypes.string.isRequired,
    date : PropTypes.instanceOf(Date).isRequired,
    win : PropTypes.bool,
    over30Points: PropTypes.bool
}