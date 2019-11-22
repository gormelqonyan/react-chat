import React, {Component} from 'react'

import '../authPage.scss'
import {Link, Redirect} from "react-router-dom";

export default class Register extends Component{

    state = {
        loginValue: '',
        passwordValue: '',
        confirmPasswordValue: '',
    };


    handleChangeInput = (e) => {

        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    };

    render(){

        const {register, isAuthenticated} = this.props;
        const {loginValue, passwordValue} = this.state;

        if(isAuthenticated){
            return <Redirect to={'/chat'}/>
        }

        return(
            <div className="auth-page">
                <div className="Register">
                    <h4 className="title">Registration</h4>
                    <form className="form" onSubmit={(e) => {e.preventDefault(); register(loginValue, passwordValue)}}>
                        <div className="form-input">
                            <label htmlFor="login" className="label">Login</label>
                            <input type="text" id="login" name="loginValue" className="input" onChange={this.handleChangeInput}/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="password" className="label">Password</label>
                            <input type="password" id="password" name="passwordValue" className="input" onChange={this.handleChangeInput}/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="confirm-password" className="label">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirmPasswordValue" className="input" onChange={this.handleChangeInput}/>
                        </div>

                        <div className="login-btn-box">
                            <button className="login-btn">Sign Up</button>
                            <Link to="login" className="auth-route">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}