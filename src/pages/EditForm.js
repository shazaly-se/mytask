import React, { Component } from 'react'
import axios from "axios"
 class EditForm extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.saveData = this.saveData.bind(this);
    
        this.state = {
          name: "",
          company: "",
          phone: "", 
          email: "",
        };
      }
      componentDidMount(){
          let id=this.props.match.params.id;
          axios.get(`http://backend-api`+id)
          .then(res => {
           
            this.setState({ 
                name:res.data.name,
                company:res.data.company,
                phone:res.data.phone,
                email:res.data.email
             });
          })

      }

      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
    
      onChangeCompany(e) {
        this.setState({
          company: e.target.value
        });
      }

      onChangePhone(e) {
        this.setState({
          phone: e.target.value
        });
      }
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
      saveData(event) {
        event.preventDefault();
        const data = {
          name: this.state.name,
          company: this.state.company,
          phone: this.state.phone,
          email: this.state.email
        };
        axios.post(`http://backen-api`, { data })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

        console.log(data)
    }
    

    render() {
        return (
            <div className="container">
             
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control"   value={this.state.name}
                onChange={this.onChangeName}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Company</label>
    <input type="text" class="form-control"  name="company"  value={this.state.company}
                onChange={this.onChangeCompany}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input type="text" class="form-control"   value={this.state.phone}
                onChange={this.onChangePhone}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="text" class="form-control"  value={this.state.email}
                onChange={this.onChangeEmail}/>
  </div>

  <button  onClick={this.saveData} class="btn btn-primary">Submit</button>

            </div>
        )
    }
}
export default EditForm
