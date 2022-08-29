import { GamepadsProvider } from "contexts/GamepadsContext";

import { CSSTransition } from "react-transition-group";
import { HashRouter as Router, Route } from "react-router-dom";

import routes from "routes";

const App = () => {
  return (
    <GamepadsProvider>
      <Router>
        {routes.map((route) => (
          <Route exact={route.isExact} path={route.path} key={route.path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  {/* <Development> */}
                  <route.component />
                  {/* </Development> */}
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Router>
    </GamepadsProvider>
  );
};

export default App;
