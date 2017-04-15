import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import PropTypes from 'prop-types'

export const TripleDoubleRow = ({opponent, 
                        date, win, over30Points}) => (
    <tr>
        <td>
            {date}
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
    date : PropTypes.string.isRequired,
    win : PropTypes.bool,
    over30Points: PropTypes.bool
}