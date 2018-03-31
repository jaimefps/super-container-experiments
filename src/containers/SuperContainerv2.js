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

const SuperContainer = ({ children, ...safeProps }) => {
  return React.cloneElement(children, safeProps);
};

/******************************************************************************
 *                               REDUX CONNECTION
 *****************************************************************************/

function _createProps (state, accessTo) {
  return accessTo.reduce((result, x) => {
    const curr = state[x];
    if (curr !== undefined) {
      result[x] = curr;
    }
    return result;
  }, {});
}

function mapStateToProps (state, ownProps) {
  // selects necessary data based on "ownProps.accessTo"
  return ownProps.accessTo ? _createProps(state, ownProps.accessTo) : state;
}

// We could filter for specific actions here as well.
function matchDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mergeProps (state, actions, ownProps) {
  const { log } = ownProps;
  const id = typeof log === 'string' ? log : '';
  if (log) {
    console.log(id+ ' State:', state);
    console.log(id+ ' Actions:', actions);
    console.log(id+ ' ownProps:', ownProps);
  }
  return { ...state, ...actions, ...ownProps };
}

export default connect(mapStateToProps, matchDispatchToProps, mergeProps)(SuperContainer);
