import React,{useState} from 'react';
import Axios from 'axios';
import Welcome from '../welcome'; 


//import './Registration/style.css';



class LoginForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {},
        
      }


      this.handleChange = this.handleChange.bind(this);
      this.submituserLoginForm = this.submituserLoginForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    
    

    submituserLoginForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
        let fields = this.state.fields;


        Axios.post("http://localhost:3001/login", {
          email :  fields["emailid"],
          password: fields["password"]
         }).then((response) => {
           console.log(response);
           if(response.data.message == "Failed")
           this.setState({loginStatus:response.data.message})
           // setLoginStatus(response.data.messsage);
            else
            localStorage.setItem('login',"true");
            this.props.history.push("/welcome");
            
        });

          fields = {};        
          fields["emailid"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          // alert("login success");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="login">
        <h3 class="title">Login</h3>
        <form method="post"  name="userLoginForm"  onSubmit= {this.submituserLoginForm} >
        
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="Login"/>
        </form>
    </div>
    <h2>{this.state.loginStatus}</h2>
</div>

      );
  }


}


export default LoginForm;