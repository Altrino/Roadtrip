import {connect} from 'react-redux';
import LoginPage from '../components/LoginPage/LoginPage';
import * as ACTIONS from '../reducers/reducerActions';

function mapStateToProps(state) {   
    return ({LoginPage: state.VisibleState.LoginPage});
}

function mapDispatchToProps(dispatch) {
    return ({authenticated: () => dispatch({type: ACTIONS.LOGIN_PAGE})});
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
