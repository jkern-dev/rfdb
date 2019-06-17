import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to='/signup'>Sign Up Instead</Link>
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <Link 
        className="header-link" 
        onClick={() => dispatch(openModal('signup'))}
      >Sign Up!</Link>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);