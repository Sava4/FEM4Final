import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { Homepage } from "../components/homePage/HomePage";
import { Products } from "../components/ProductsList";
import { Categories } from "../components/Categories";
import { ProductDitails } from "../components/ProductDitails";
import { Account } from "../components/Account";
import { ShoppingBag } from "../components/Shopping-bag";
import { Error } from "../components/404error";

export const Routes = () => {
  // const [isAuthenticated, setIsAuthenticated]= useState(false)
  const isAuthenticated = true;
  return isAuthenticated ? (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/categories" component={Categories} />
      <Route path="/categories/rings/:id" component={Products} />
      <Route path="/categories/earrings" component={Products} />
      <Route path="/categories/bracelets" component={Products} />
      <Route path="/categories/neclaces" component={Products} />
      <Route path="/products" component={Products} />
      <Route path="/productsditails" component={ProductDitails} />
      <Route exact path="/account" component={Account} />
      +
      <Route path="/account/favorites" component={Products} />
      <Route path="/account/shopping-bag" component={ShoppingBag} />
      <Route path="/logout" component={Products} />
      <Route path="/404error" component={Error} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Homepage} />

      <Route exact path="/categories" component={Categories} />

      <Route path="/categories/rings" component={Products} />
      <Route path="/categories/earrings" component={Products} />
      <Route path="/categories/bracelets" component={Products} />
      <Route path="/categories/neclaces" component={Products} />

      <Route path="/products" component={Products} />

      <Route path="/productsditails" component={ProductDitails} />

      <Route path="/login" component={Products} />

      <Route path="/404error" component={Error} />
      <Redirect to="/" />
    </Switch>
  );
};
