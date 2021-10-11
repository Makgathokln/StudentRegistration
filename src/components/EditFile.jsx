import {Component} from 'react';
import List from "./List";

class EditFile extends Component{
    constructor(props) {
        super(props);

        this.state = {
            dir:[],
            item:{
                name:"",
                surname:"",
                age:"",
                location:""
            },
            isEditing:false,
            temp_index:null

        }

        this.handleChange = this.handleChange.bind(this)
        this.add = this.add.bind(this)
      //edit
        this.edit = this.edit.bind(this)
    }

    handleChange(event){
        const name = event.target.name;
        const value = event.target. value;
        let item = this.state.item;

        item[name] = value;

        this.setState(   {item:item})

    }

    add(e){
        e.preventDefault()
        let dir = this.state.dir;
        dir.push(this.state.item)
        this.setState( {dir:dir, item:{name:"",surname:"",age:"",location:""}})
        console.log(this.state.dir)
    }
//edit
    edit(index){
      let item = this. state.dir[index]
      this.setState( {item:item, isEditing:true, temp_index:index }) 
    }

    //update same page
    update(e){
        e.preventDefault()
    }
    render(){
        return (
            <div className="col-md-6">
                <form methond="POST" onSubmit={this.state.isEditing ? this.update: this.add} >
                    <div className="mb-2">
                        <input  
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                       className="form-control"
                      value={this.state.item.name}
                    onChange={this.handleChange}

                    />

                        
                    </div>
                   
                    <div className="mb-2">
                        <input  
                        type="text"
                        name="surname"
                        placeholder="Enter Surname"
                       className="form-control"
                       value={this.state.item.surname}
                       onChange={this.handleChange}
   
                      />

                        
                    </div>
                    <div className="mb-2">
                        <input  
                        type="text"
                        name="age"
                        placeholder="Enter Age"
                       className="form-control"
                       value={this.state.item.age}
                       onChange={this.handleChange}
   
                     />

                        
                    </div>

                    <div className="mb-2">
                        <input  
                        type="text"
                        name="location"
                        placeholder="Enter Location"
                       className="form-control"
                       value={this.state.item.location}
                       onChange={this.handleChange}
   
                       />

                        
                    </div>

                    <div className="mb-2">
                        <button className="btn btn-success" type="submit">
                            {this.state.isEditing ? "Update" : "Save"}
                        </button>

                        
                    </div>
                </form>
                <List
                dir={this.state.dir}
                edit={this.edit}
                />
            </div>
        )
    }

}

export default EditFile;