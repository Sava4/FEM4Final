import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";

import { Homepage } from "../components/homePage/HomePage";
import { ProductFilters } from "../components/ProductsFilterList";
import { Categories } from "../components/Categories";
import { ProductDetails } from "../components/ProductDetails";
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
              <Route exact path="/categories" component={ProductFilters} />
                  <Route path="/categories/rings/:id" component={ProductFilters} />
                  <Route path="/categories/earrings" component={ProductFilters} />
                  <Route path="/categories/bracelets" component={ProductFilters} />
                  <Route path="/categories/neclaces" component={ProductFilters} />
              <Route path="/products" component={ListProducts} />
              <Route path="/productsdetails" component={ProductDetails} />
              <Route exact path="/account" component={Account} />
              +
              <Route path="/account/favorites" component={ListProducts} />
              <Route path="/account/shopping-bag" component={ShoppingBag} />
              <Route path="/logout" component={ListProducts} />
              <Route path="/404error" component={Error} />
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
                  <Route path="/categories/neclaces" component={ProductFilters} />

              <Route path="/products" component={ProductFilters} />

            <Route path="/productsdetails" component={ProductDetails} />

              <Route path="/login" component={ProductFilters} />
              <Route path="/categories/rings" component={ProductFilters} />
              <Route path="/categories/earrings" component={ProductFilters} />
              <Route path="/categories/bracelets" component={ProductFilters} />
              <Route path="/categories/neclaces" component={ProductFilters} />

              <Route path="/products" component={ProductFilters} />

              <Route path="/productsditails" component={ProductDetails} />

              <Route path="/login" component={ProductFilters} />

              <Route path="/404error" component={Error} />
              <Redirect to="/" />
          </Switch>
    </Provider>
  );
};
