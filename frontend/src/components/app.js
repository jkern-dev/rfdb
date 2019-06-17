import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

// session and splash components
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

// questions components
import QuestionsContainer from './questions/questions_container';
import ProfileContainer from './profile/profile_container';
import QuestionComposeContainer from './questions/question_compose_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
      {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

      <ProtectedRoute exact path='/questions' component={QuestionsContainer} />
      <ProtectedRoute exact path='/profile' component={ProfileContainer} />
      <ProtectedRoute exact path='/new_question' component={QuestionComposeContainer} />
    </Switch>
  </div>
);

export default App;