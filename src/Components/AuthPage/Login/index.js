import React, {Component} from 'react'

import '../authPage.scss'
import {Link, Redirect} from "react-router-dom";

export default class Login extends Component{

    state = {
        loginValue: '',
        passwordValue: '',
    };

    handleChangeInput = (e) => {

        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    };

    render(){

        const {login, isAuthenticated} = this.props;
        const {loginValue, passwordValue} = this.state;

        if(isAuthenticated){
            return  <Redirect to={'/chat'}/>
        }

        return(
            <div className="auth-page">
                <div className="login">
                    <h4 className="title">Login</h4>
                    <form className="form" onSubmit={(e) => {e.preventDefault(); login(loginValue, passwordValue)}}>
                        <div className="form-input">
                            <label htmlFor="login" className="label">Login</label>
                            <input type="text" id="login" name="loginValue" className="input" onChange={this.handleChangeInput}/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="password" className="label">Password</label>
                            <input type="password" id="password" name="passwordValue" className="input" onChange={this.handleChangeInput}/>
                        </div>

                        <div className="login-btn-box">
                            <button className="login-btn">Sign In</button>
                            <Link to="register" className="auth-route">Registration</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}