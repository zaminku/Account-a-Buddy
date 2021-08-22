import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page.jsx';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import GoalIndexContainer from './goals/goal_index_container';
import GoalListContainer from './goals/goal_list_container';
import GoalFormContainer from './goals/goal_form_container';
import MessageIndexContainer from './messages/message_index_container';
// import ChatPageContainer from './messages/chat_page_container';
import AboutPage from './about/about_page'
import ContactPage from './contact/contact_us';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/goals" component={GoalListContainer}/>
            {/* <ProtectedRoute exact path="/goalslist" component={GoalListContainer}/> */}
            <ProtectedRoute exact path="/goals/new" component={GoalFormContainer}/>
            <ProtectedRoute path="/chat" component={MessageIndexContainer}/>
        </Switch>
    </div>
);

export default App;