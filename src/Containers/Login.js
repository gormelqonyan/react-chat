import Login from "../Components/AuthPage/Login";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {login} from '../actions/auth'

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.isAuthenticated
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    login
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)