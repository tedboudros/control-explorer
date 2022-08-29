import { GamepadsProvider } from "contexts/GamepadsContext";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import routes from "routes";

const App = () => {
  return (
    <GamepadsProvider>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              exact={route.isExact}
              path={route.path}
              key={route.path}
              element={
                <div className="page">
                  <route.component />
                </div>
              }
            />
          ))}
        </Routes>
      </Router>
    </GamepadsProvider>
  );
};

export default App;
