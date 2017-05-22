import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { switchBoolean } from '../actions/testAction';

import App from '../components/App';

function mapStateToProps(state) {
  return {
    bool: state.boolean,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { 
      switchBoolean 
    }, 
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(App);