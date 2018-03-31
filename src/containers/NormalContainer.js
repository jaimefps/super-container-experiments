// react & redux
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { switchBoolean, switchNumber } from '../actions';

// import component that needs to connect 
import App from '../components/App-normal';

/******************************************************************************
 *                               NORMAL CONTAINER
 *****************************************************************************/

const NormalContainer = (props) => (
  // hardcoded dumb component
  <App { ...props} />
);


/******************************************************************************
 *                               REDUX CONNECTION
 *****************************************************************************/

function mapStateToProps (state) {
  // hardcoded state keys
  return {
    boolean: state.boolean,
    number: state.number,
  };
}

function matchDispatchToProps (dispatch) {
  // hardcoded actions
  return bindActionCreators(
    { 
      switchBoolean,
      switchNumber,
    }, 
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(NormalContainer);
