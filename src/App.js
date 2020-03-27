import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import Login from "./containers/Login";
import Main from "./containers/Main";
import SignUp from "./containers/Signup";
import UserEdit from "./containers/Edit";
import ChangePassword from "./containers/ChangePassword";
import SearchUser from "./containers/SearchUser";
import UserInfo from "./containers/UserInfo";
import FollowUserList from "./containers/FollowUserList";
import FollowerList from "./containers/FollowerList";
import ShowTweet from "./containers/ShowTweet"
import { PrivateRoute } from "./Components/PrivateRoute"

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Switch>
          <PrivateRoute path="/Main" exact={true} component={Main} />
          <Route path="/signup" exact={true} component={SignUp} />
          <Route path="/" exact={true} component={Login} />
          <PrivateRoute path="/user/edit" exact={true} component={UserEdit} />
          <PrivateRoute path="/user/chagePassword" exact={true} component={ChangePassword} />
          <PrivateRoute path="/user/search/:searchVal" exact={true} component={SearchUser} />
          <PrivateRoute path="/user/:id" exact={true} component={UserInfo} />
          <PrivateRoute path="/user/:id/follow" exact={true} component={FollowUserList} />
          <PrivateRoute path="/user/:id/follower" exact={true} component={FollowerList} />
          <PrivateRoute path="/tweet/:id" exact={true} component={ShowTweet} />
        </Switch>
      </div>
    );
  }
}

export default App;
