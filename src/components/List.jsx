import { Component } from "react";
import { Link } from 'react-router-dom'; 


class List extends Component{
    render() {
        return (
            <div>
                <ul className="list-group">
                   {
                       this.props.dir.map((item, index)=>(
                        <li className="list-group-item" key={index}>
{item.name} - {item.surname} - {item.age} - {item.location}
                        <span className="float-right" >
                          
                            <button className="btn btn-success btn-sm mr-2">
                              View  </button>
                            
                              <button className="btn btn-warning btn-sm mr-2 "
                             to="/users/edit">
                              Edit  </button>
                             
                              <button className="btn btn-danger btn-sm ">
                              Delete  </button>

                        </span>
                    </li>
                        ) )
                   }
                </ul>
            </div>
        )
    }
}

export default List;