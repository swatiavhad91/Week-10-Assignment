import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./Step1";
import Openings from "./Openings";

createStore({});

function App() {
  return (
    <React.Fragment>

    <StateMachineProvider>
    

      <Router>
        <Route exact path="/" component={Step1} />
        
        <Route path="/openings" component={Openings} />
        {/* <Route path="/result" component={Result} /> */}
         
      </Router>
    </StateMachineProvider>

    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
