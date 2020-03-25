import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Example from './component/nav';
import './App.css';
import { BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import falsi from './component/u1/falseiteration';
import bisection from './component/u1/bisection';
import onepoint from './component/u1/onepoint';
import taylor from './component/u1/taylor';
import newton from './component/u1/newton';
import secant from './component/u1/secant';
import gauss from './component/u2/gauss';
import camer from './component/u2/camer';
import choles from './component/u2/choles';
import jordan from './component/u2/jordan';
import  lu from './component/u2/lu';
import seidel from './component/u2/seidel';
import jacobi from './component/u2/jacobi';
import Default from './component/Default';
import newton_d from './component/u3/newton_d';
import lagrange from './component/u3/lagrange';
import spline from './component/u3/spline';
import trape from './component/u4/trape';
import simson from './component/u4/simson';
import diff from './component/u5/diff';


export default class App extends Component {

  render() {

    return (

      <div>
        <Example />
        
        <BrowserRouter>
          <Switch>
            <Route path="/falseiteration"component={falsi}/>
            <Route path="/bisection"component={bisection}/>
            <Route path="/onepoint"component={onepoint}/>
            <Route path="/taylor"component={taylor}/>
            <Route path="/newton"component={newton}/>
            <Route path="/secant"component={secant}/>
            <Route path="/gauss"component={gauss}/>
            <Route path="/camer"component={camer}/>
            <Route path="/choles"component={choles}/>
            <Route path="/jordan"component={jordan}/>
            <Route path="/lu"component={lu}/>
            <Route path="/jacobi"component={jacobi}/>
            <Route path="/seidel"component={seidel}/>
            <Route path="/newton_d"component={newton_d}/>
            <Route path="/lagrange"component={lagrange}/>
            <Route path="/spline"component={spline}/>
            <Route path="/trape"component={trape}/>
            <Route path="/simson"component={simson}/>
            <Route path="/diff"component={diff}/>
            <Route component={Default}/>
          </Switch>
        </BrowserRouter>
      
      </div>

    )
  }
}


