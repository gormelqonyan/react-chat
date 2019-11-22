import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Chat from '../Components/Chat/index'
import {logout, userme} from "../actions/auth";
import {getChatItem} from "../actions/chat";

const mapStatToProps = state => {
    return {
        user: state.auth.user,
        chats: state.chat.chatItem
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    logout,
    userme,
    getChatItem
}, dispatch);

export default connect(
    mapStatToProps,
    mapDispatchToProps
)(Chat)