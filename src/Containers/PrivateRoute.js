import React, {Component} from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {reciveAuth} from "../actions/auth"

class PrivateRouter extends Component{
    componentDidMount() {
        this.props.reciveAuth()
    }

    render() {
        const { component: Component, isAuthenticated, ...rest} = this.props;
        return(
            <Route {...rest} render={(props) =>(
                isAuthenticated
                    ? <Component {...props}/>
                    : <Redirect to={'/login'}/>
            )}
            />
        )
    }
}



const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    reciveAuth
}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivateRouter))