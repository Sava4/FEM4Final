import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { StaticPageView } from "../components/StaticPageView/staticPageView";
import { Homepage } from "../components/homePage/HomePage";
import { ProductFilters } from "../components/ProductsFilterList";
// import { HeaderProductFilters } from "../components/HeaderFilters";
import { Categories } from "../components/Categories";
import { ProductDetailsLayout } from "../components/ProductDetails";
import { Account } from "../components/Account";
import { Wishlist } from "../components/Wishlist/wishlist";
import { ShoppingBag } from "../components/ShoppingBag";
import { Error } from "../components/404error";
import { ProductSliderView } from "../components/SliderProducts/productSliderView";
import ProductsContainer from "../components/SliderProducts/ProductsContainer";
import { Checkout } from "../components/Checkout";

export const Routes = () => {
  // const [isAuthenticated, setIsAuthenticated]= useState(false)
  const isAuthenticated = true;
  return isAuthenticated ? (
    <Switch>
      <Route exact path="/" component={Homepage} />
      {/* <Route exact path="/:parentmMenu/:chosenMenu" component={HeaderProductFilters} /> */}
      <Route path="/categories/:category" component={ProductFilters} />
      {/* <Route path="/categories/earrings" component={ProductFilters} />
      <Route path="/categories/bracelets" component={ProductFilters} />
      <Route path="/categories/necklaces" component={ProductFilters} /> */}
      <Route path="/products" component={ProductFilters} />
      <Route path="/product-details/:id" component={ProductDetailsLayout} />
      {/* <Route exact path="/product/:itemNo" component={ProductSliderView} /> */}
      <Route path="/pagin/:path?" component={ProductsContainer} />
      <Route exact path="/account" component={Account} />
      +
      <Route exact path="/account/favorites" component={Wishlist} />
      <Route exact path="/account/shopping-bag" component={ShoppingBag} />
      <Route exact path="/account/checkout" component={Checkout} />
      <Route exact path="/logout" component={ProductFilters} />
      <Route exact path="/404error" component={Error} />
      <Route exact path="/pages/:url" component={StaticPageView} />
      {/* <Redirect to="/" /> */}
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/categories" component={Categories} />
      <Route path="/categories/rings" component={ProductFilters} />
      <Route path="/categories/earrings" component={ProductFilters} />
      <Route path="/categories/bracelets" component={ProductFilters} />
      <Route path="/categories/necklaces" component={ProductFilters} />
      <Route path="/products" component={ProductFilters} />
      <Route path="/product-details/:id" component={ProductDetailsLayout} />
      <Route path="/login" component={ProductFilters} />
      <Route path="/404error" component={Error} />
      <Redirect to="/" />
    </Switch>
  );
};
