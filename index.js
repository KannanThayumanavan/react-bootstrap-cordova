//'use strict';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import RootComponent from './src/RootComponent';
//injectTapEventPlugin();



class ReactWebpackCordova extends Component{
  render(){
    return (
      <div>
        <RootComponent />
      </div>
    )
  }
};


ReactDOM.render(
  <ReactWebpackCordova />,
  document.getElementById('container')
);


// Import react dependencies
/*import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import RootComponent from './src/RootComponent';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import MobileLayout from './src/MobileLayout';
import MediaQuery from 'react-responsive';


// Pass JSON data as properties to DataBlock component
//ReactDOM.render(<RootComponent />, document.getElementById('container'));

render(
  <Router history={browserHistory}>
    <Route path="/" component={RootComponent} />
    <Route path="/mobile" component={MobileLayout} />
  </Router>, document.getElementById('container')
);*/
