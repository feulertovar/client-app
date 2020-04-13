import React, { Component } from 'react';
// import Hub
import { Auth, Hub } from 'aws-amplify'

var SignAuth = getSign();

function getSign(){
        var authSign;
        if( signOut() ){
            authSign = <a href="#"onClick={signOut}><span class="glyphicon glyphicon-log-in"></span> LogOut</a>
        }
        else{
         
            authSign = <a href="#"onClick={() => Auth.federatedSignIn()}><span class="glyphicon glyphicon-plus"></span> SignIn</a>
        }
        return (
                {authSign}
        );
    }


function checkUser() {
    Auth.currentAuthenticatedUser()
      .then(user => console.log({ user }))
      .catch(err => console.log(err))

  }
  
  function signOut() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

class NavMenu  extends Component{

render(){
    
    return(
        
            <nav className="navbar navbar-inverse">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">UZERS</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Invoices</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">About Us</a></li>
            
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"onClick={() => Auth.federatedSignIn()}><span class="glyphicon glyphicon-plus"></span> SignIn</a></li>
                    <li><a href="#"onClick={signOut}><span class="glyphicon glyphicon-log-in"></span> LogOut</a></li>
                    </ul>
                </div>
            </nav>

    );
  }
}

export default NavMenu