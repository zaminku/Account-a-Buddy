import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import MainPage from './main/main_page.jsx';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GoalListContainer from './goals/goal_list_container';
import GoalFormContainer from './goals/goal_form_container';
import ChatRoomContainer from './messages/chat_room_container';
import AboutPage from './about/about_page'
import ContactPage from './contact/contact_us';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/goals" component={GoalListContainer}/>
            <ProtectedRoute exact path="/goals/new" component={GoalFormContainer}/>
            <ProtectedRoute path={`/chat/:goalId`} component={ChatRoomContainer}/>
        </Switch>
    </div>
);

export default App;