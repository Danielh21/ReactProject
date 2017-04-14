import {TripleDoubleRow } from './TripleDoublerow'
import {Link} from 'react-router-dom'

export const TripleCountList = ({tripleDoubles, filter}) =>{
    const filteredTripleDoubles = 
    (!filter || !filter.match(/wins|30points/)) ?
        tripleDoubles :
        tripleDoubles.filter(trip => trip[filter])

    return (
    <div className="tripleDList">
    <table>
      <thead>
        <tr>
          <th>Date </th>
          <th>Oppenent </th>
          <th>Wins </th>
          <th> Over 30 Points </th>
        </tr>
        <tr>
            <td colSpan={1}>
                <Link to="list">
                    All
                </Link>
                </td>
                <td colSpan={1}>
                <Link to="/list/wins">
                    Wins with TD
                </Link>
                </td>
                <td colSpan={1}>

                <Link to="/list/30point">
                    30p+ TD
                </Link>
            </td>
        </tr>
      </thead>
      <tbody>
          {filteredTripleDoubles.map((trip, i) =>
                <TripleDoubleRow key={i} 
                                 {... trip}/>
          )}
      </tbody>
    </table>
    </div>
)}

TripleCountList.propTypes = {
    tripleDoubles: function(props){
        if(!Array.isArray(props.days)){
            return new Error(
                "Should have an array here"
            )
        }
        else if(!props.days.length){
            return new Error(
                "We needs some errors"
            )
        }
    }

}


