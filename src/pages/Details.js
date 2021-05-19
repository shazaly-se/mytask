import React, { Component } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"
 class Details extends Component {
     constructor(props){
         super(props)
        this.state = {
            persons: []
          }
     }

    componentDidMount() {
        axios.get(`http://backend-api`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    
    render() {
        return (
            <div className="container">
            <h1>Simple Inventory Table</h1>
            <table>
                <thead>
                <tr>
                    <th> Name</th>
                    <th>Company</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.persons.map((per) => (
                            <tr key={per.id}>
                                <td>{per.name}</td>
                                <td>{per.company}</td>
                                <td>{per.phone}</td>
                                <td>{per.email}</td>
                                <td>
                                <Link
                to={"/tutorials/" + per.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        )
    }
}
export default Details
