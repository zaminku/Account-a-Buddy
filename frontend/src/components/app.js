import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page.jsx';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
<<<<<<< HEAD
import MessageIndexContainer from './messages/message_index_container';
// import ChatPageContainer from './messages/chat_page_container';
=======
import GoalIndexContainer from './goals/goal_index_container';
>>>>>>> main

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route path="/chat" component={MessageIndexContainer}/>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/goals" component={GoalIndexContainer}/>
        </Switch>
    </div>
);

export default App;