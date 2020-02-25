import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { StaticPageView } from "../components/StaticPageView/staticPageView";
import { Homepage } from "../components/homePage/HomePage";
import { Products } from "../components/ProductsList";
import { Categories } from "../components/Categories";
import { ProductDitails } from "../components/ProductDitails";
import { Account } from "../components/Account";
import { ShoppingBag } from "../components/ShoppingBag";
import { Error } from "../components/404error";

export const Routes = () => {
  // const [isAuthenticated, setIsAuthenticated]= useState(false)
  const isAuthenticated = true;
  return isAuthenticated ? (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/:url" component={StaticPageView} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/categories/rings/:id" component={Products} />
      <Route exact path="/categories/earrings" component={Products} />
      <Route exact path="/categories/bracelets" component={Products} />
      <Route exact path="/categories/neclaces" component={Products} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/productsditails" component={ProductDitails} />
      <Route exact path="/account" component={Account} />
      +
      <Route exact path="/account/favorites" component={Products} />
      <Route exact path="/account/shopping-bag" component={ShoppingBag} />
      <Route exact path="/logout" component={Products} />
      <Route exact path="/404error" component={Error} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/:url" component={StaticPageView} />
      <Route exact path="/categories/rings" component={Products} />
      <Route exact path="/categories/earrings" component={Products} />
      <Route exact path="/categories/bracelets" component={Products} />
      <Route exact path="/categories/neclaces" component={Products} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/productsditails" component={ProductDitails} />
      <Route exact path="/login" component={Products} />
      <Route exact path="/404error" component={Error} />
      <Redirect to="/" />
    </Switch>
  );
};
