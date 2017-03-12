import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import NavBar from './components/navbar';
import New from './components/new';
import Welcome from './components/welcome';
import Comments from './components/comments';
import Avatar from './avatar/avatarcomponent';


const USER_DATA = {
    name: 'Selvaganesh',
    username : 'ganny26',
    image: 'https://help.github.com/assets/images/help/profile/identicon.png'
};

ReactDOM.render(
  <div>
  
    <NavBar />
    <Avatar user={USER_DATA}/>
    <div className="container">
      <New />
    </div>
  </div>,
  document.getElementById('app')
);