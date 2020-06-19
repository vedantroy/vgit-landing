import React from "react";
import { withRouter, Switch, Redirect } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";
import LayoutAlternative from "./layouts/LayoutAlternative";
import LayoutSignin from "./layouts/LayoutSignin";

// Views
import Home from "./views/Home";
//import Secondary from "./views/Secondary";
import Login from "./views/Login";
import Signup from "./views/Signup";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    document.body.classList.add("is-loaded");
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    console.log('V2 -- New changes')
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute
              exact
              path="/signup"
              component={Signup}
              layout={LayoutSignin}
            />
            <Redirect exact from="/reload" to="/signup" />
          </Switch>
        )}
      />
    );
  }
}

export default withRouter((props) => <App {...props} />);
