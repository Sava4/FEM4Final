import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";

import { Homepage } from "../components/homePage/HomePage";
import { ProductFilters } from "../components/ProductsFilterList";
import { Categories } from "../components/Categories";
import { ProductDetailsLayout } from "../components/ProductDetails";
import { Account } from "../components/Account";
import { ShoppingBag } from "../components/ShoppingBag";
import { Error } from "../components/404error";
import {ListProducts} from "../components/ProductsList/productList"

export const Routes = () => {
  // const [isAuthenticated, setIsAuthenticated]= useState(false)
  const isAuthenticated = true;
  return isAuthenticated ? (
      <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/categories" component={Categories} />
      <Route path="/categories/rings/:id" component={Products} />
      <Route path="/categories/earrings" component={Products} />
      <Route path="/categories/bracelets" component={Products} />
      <Route path="/categories/necklaces" component={Products} />
      <Route path="/products" component={Products} />
      <Route path="/product-details/:id" component={ProductDetailsLayout} />
      <Route exact path="/account" component={Account} />
      +
      <Route exact path="/account/favorites" component={Products} />
      <Route exact path="/account/shopping-bag" component={ShoppingBag} />
      <Route exact path="/logout" component={Products} />
      <Route exact path="/404error" component={Error} />
      <Route exact path="/:url" component={StaticPageView} />
      <Redirect to="/" />

    </Switch>
        </Provider>
  ) : (
     <Provider store={store}>
          <Switch>
              <Route exact path="/" component={Homepage} />

              <Route exact path="/categories" component={Categories} />

                  <Route path="/categories/rings" component={ProductFilters} />
                  <Route path="/categories/earrings" component={ProductFilters} />
                  <Route path="/categories/bracelets" component={ProductFilters} />
                  <Route path="/categories/necklaces" component={ProductFilters} />

              <Route path="/products" component={ProductFilters} />

      <Route path="/product-details/:id" component={ProductDetailsLayout} />

      <Route path="/login" component={Products} />

              <Route path="/404error" component={Error} />
              <Redirect to="/" />
          </Switch>
    </Provider>
  );
};
