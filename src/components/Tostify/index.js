/*
 *
 * ToastProvider
 *
 * this component Provide a toast continer
 * ToastProvider
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'
export function ToastProvider(props) {
  return (
    <>
      {React.Children.only(props.children)}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        transition={Zoom}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

ToastProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(ToastProvider);
