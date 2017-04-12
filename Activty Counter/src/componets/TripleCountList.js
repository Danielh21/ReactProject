import {TripleDoubleRow } from './TripleDoublerow'

export const TripleCountList = ({tripleDoubles}) =>(
    <table>
      <thead>
        <tr>
          <th>Date </th>
          <th>Oppenent </th>
          <th>Wins </th>
          <th> Over 30 Points </th>
        </tr>
      </thead>
      <tbody>
          {tripleDoubles.map((trip, i) =>
                <TripleDoubleRow key={i} 
                                 {... trip}/>
          )}
      </tbody>
    </table>
)

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


