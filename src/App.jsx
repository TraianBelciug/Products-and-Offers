import React from "react";
import Categories from "./pages/categories";
import { Route, Link, Switch, HashRouter } from "react-router-dom";
import Promotions from "./pages/Promotions";

const App = () => {
  return (
    <HashRouter>
      <nav className="navbar">
        <div>
          <Link to="/">Promotions</Link>
        </div>
        <div>
          <Link to="/category/1">Winter Offer</Link>
        </div>
        <div>
          <Link to="/category/2">Spring Offer</Link>
        </div>
        <div>
          <Link to="/category/3">Autumn Offer</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/category/:categoryId" component={Categories}></Route>

        <Route exact path="/" component={Promotions}></Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
