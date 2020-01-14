import React, { Component} from "react";
import {Redirect} from "react-router-dom";


class SignOut extends Component {
    state = {
      navigate: false

  };

   logout = () => {
     localStorage.clear("token");
     this.setState({navigate:true});
   };
   render() {
     const {navigate} = this.state;

     if (navigate) {
       return <Redirect to="/" push={true} />;
     }
       return <Button onClick={this.logout}>Sign Out</Button>;
   }
}

export default SignOut;



//
// signOut = () => {
//   Auth.signOut()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// }

// Then in your render method.
// <button onClick={this.signOut} className="signOutButton">SignOut</button>
