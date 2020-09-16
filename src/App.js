import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';

import Post from './Post';
import Navigation from './Navigation';

import PostForm from './PostForm';
import AllPost from './AllPost';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/post" component={AllPost}/>
            
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;