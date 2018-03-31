// react & redux
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions
import * as actions from '../actions';

// NOTE: we do not import a component!

/******************************************************************************
 *                               SUPER CONTAINER
 *****************************************************************************/

// Q: How do you pass props to a child that is not hard-coded?
// A: React.cloneElement

// See ~/examples/hardcoded.js for discussion.

const SuperContainer = ({ children , ...safeProps }) => {
  return React.cloneElement(children, safeProps);
};

/******************************************************************************
 *                               REDUX CONNECTION
 *****************************************************************************/

function mapStateToProps (state) {
  // passes all state (sub-optimal)
  return state;
}

function matchDispatchToProps (dispatch) {
  // passes all actions
  return bindActionCreators(
    actions,
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(SuperContainer);
