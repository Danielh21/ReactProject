import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

class Member extends Component {



    render() {
        const {admin, email, name, makeAdmin, thumbnail} = this.props

	
        return (
        <div className="member" style ={this.style}>

        <h1>{name}</h1> {(admin) ? <FaShield/> : null}
        <img src={thumbnail}></img>
        <br/>
        <a>{email}</a>
        <br/>
        <span style={{cursor: "pointer"}} onClick={makeAdmin}>Make Admin</span>

        </div>
        )
    }
}

export default Member