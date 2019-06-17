import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Log In Instead</Link>
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <Link 
        className="header-link"
        onClick={() => dispatch(openModal('login'))}
      >Log In!</Link>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);