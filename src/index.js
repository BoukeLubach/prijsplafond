// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Create Import File
import './index.scss';
import PageScrollTop from './component/PageScrollTop';
import Home from './pages/Home';
// Element Layout
import error404 from "./elements/error404";
// Blocks Layout
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>

                        <Route exact path={`${process.env.PUBLIC_URL}/home`} component={Home}/>

                        
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();