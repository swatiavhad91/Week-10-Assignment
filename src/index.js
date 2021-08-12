import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { StateMachineProvider, createStore} from "little-state-machine";
import Step1 from "./Step1";
import Openings from "./Openings";
import ErrorBoundary from "./ErrorBoundries";
import "./App.css"

createStore({});



function App() {
  
  return  (
    <React.Fragment>

      <StateMachineProvider>

        <ErrorBoundary>

          <Router>

            <Route exact path="/" component={Step1} />
            
            <Route path="/openings" component={Openings} />


          </Router>

        </ErrorBoundary>

      </StateMachineProvider>

    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
