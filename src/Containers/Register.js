import Register from "../Components/AuthPage/Register";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {register} from '../actions/auth'

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.isAuthenticated
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    register
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)