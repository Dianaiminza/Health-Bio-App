import React, { Component } from 'react'

 class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fname: '',
          lname: '',
          email: '',
          gender:'',
          age:'',
          medical:'',
          message: '',
        }
      }
    render() {
        return (
            <>
            <p>Contact Us</p>
            <div className="Contact">
              <form>
                  <label>First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Enter your first  name"
                  value={this.state.fname}
             onChange={e=>this.setState({fname:e.target.value})}
              />
              
              <label>Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Enter your last  name"
                  value={this.state.lname}
              onChange={e=>this.setState({lname:e.target.value})}

              />
              <label>Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your last  email"
value={this.state.email}
onChange={e=>this.setState({email:e.target.value})}
              />
              
              <label>Gender</label>
              <select name="gender">
<option value="male">Male</option>
<option value="female">Female</option>
<option value="other">Other</option>
<input type="dropbox"id="gender"name="gender"
  value={this.state.gender}
onChange={e=>this.setState({gender:e.target.value})}  
/>
</select>
              <label>Age:</label>
              <input type="number"name="age"
                  value={this.state.age}
onChange={e=>this.setState({age:e.target.value})}
              />
              <br></br>
              <label>Medical Challenge</label>
              <select name="medical">
              <option value="Arthritis">Arthritis</option>
<option value="Cancer">Cancer</option>
<option value="Diabetes">Diabetes</option>
<option value="Epilepsy">Epilepsy</option>
<option value="Heart disease">Heart disease</option>
<option value="High blood pressure">High blood pressure</option>
<option value="Depression">Depression</option>
<option value="Asthma">Asthma</option>
<option value="CoronVirus">CoronaVirus</option>
<option value="other">Other</option>
<input type="dropbox"id="medical"name="medical"
  value={this.state.medical}
onChange={e=>this.setState({medical:e.target.value})}  
/>
              </select>
              <label>Subject</label>
<textarea id="subject"name="subject"placeholder="Share your medical challenge,experiences in battling the disease and solutions"
onChange={e => this.setState({ message: e.target.value })}
    value={this.state.message}
></textarea>
<input type="submit"  onClick={e => this.handleFormSubmit(e)}value="Submit"/>           
              </form>  
            </div>
            </>
        );
    }
}

export default Contact;