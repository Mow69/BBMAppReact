import { connect } from 'react-redux';
import App from "../App";
import { conf } from '../config.js';
import * as appActions from '../actions/appActions';

const mapStateToProps = (state) => {
    return {
        state: {
            app: state.app
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;