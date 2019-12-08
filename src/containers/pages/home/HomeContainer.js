import { connect } from 'react-redux';
import Home from "../../../components/pages/home/Home";
import { conf } from '../../../config.js';
import * as appActions from '../../../actions/appActions';

const mapStateToProps = (state) => {
    return {
        state: {
            app: state.app
        },
        isConnected: !!(state.app.xAuthToken && state.app.xAuthToken.value)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getXAuthToken: (login, password) => {
            fetch(`${conf.API_SERVER}/auth-tokens`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    login: login,
                    password: password
                })
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                dispatch(appActions.setXAuthToken(data));
            });
        }
    };
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;