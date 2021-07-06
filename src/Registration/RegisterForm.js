import React from 'react';
import './style.css';
import Axios from 'axios';


class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {
          emailid: "",
          password:""
        },
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {

        let fields = this.state.fields;
        console.log(fields);

        Axios.post("http://localhost:3001/register", {
          email :  fields["emailid"],
          password: fields["password"]
         }).then(() => {
          alert("registered");
        });

          fields = {};
          fields["emailid"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Registration successfull");
      }

    }
    
    validateForm() {
      // const [email, setEmail] = useState("");
      // const [password, setPassword] = useState("");
    
      // const submit = () => {
      //   Axios.post("http://localhost:3001/api/register", {
      //     email : email,
      //     password: password
      //   }).then(() => {
      //     alert("registered");
      //   });
      // }
     
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
     <div id="register">
        <h3 className="title">Registration</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterForm;