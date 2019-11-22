import React, {Component} from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

class PrivateRouter extends Component{
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

export default withRouter(connect(
    mapStateToProps
)(PrivateRouter))