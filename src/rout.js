import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/cadastro/" component={Cadastro} />
      </div>
    </Router>
  );
}

export default AppRouter;
