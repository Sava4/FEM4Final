import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { StaticPageView } from "../components/StaticPageView/staticPageView";
import { Homepage } from "../components/homePage/HomePage";
import { ProductFilters } from "../components/ProductsFilterList";
import { GiftCardView } from "../components/GiftCardsView/GiftCardView"
import { ProductDetailsLayout } from "../components/ProductDetails";
import { Account } from "../components/Account";
import { Wishlist } from "../components/Wishlist/Wishlist";
import { ShoppingBag } from "../components/ShoppingBag";
import { Error } from "../components/404error";
import ProductsContainer from "../components/SliderProducts/ProductsContainer";
import { Checkout } from "../components/Checkout";
import { PersonalDetails } from "../components/PersonalDetails/PersonalDetails";

export const Routes = () => {
  const user = useSelector(state => state.user);

  return user ? (
    <Switch>
      <Route exact path="/" component={Homepage} />
      {/* <Route path="/headerMenu/:chosenMenu" component={ProductFilters} /> */}
      <Route exact path="/giftсards" component={GiftCardView} />
      <Route path="/categories/:category" component={ProductFilters} />
      <Route path="/products" component={ProductFilters} />
      <Route path="/product-details/:id" component={ProductDetailsLayout} />
      {/* <Route path="/pagin/:path?" component={ProductsContainer} /> */}
      <Route exact path="/account" component={Account} />
      <Route exact path="/account/favorites" component={Wishlist} />
      <Route exact path="/account/shopping-bag" component={ShoppingBag} />
      <Route exact path="/account/checkout" component={Checkout} />
      <Route
        exact
        path="/account/personal-details"
        component={PersonalDetails}
      />
      <Route exact path="/logout" component={ProductFilters} />
      <Route exact path="/404error" component={Error} />
      <Route exact path="/pages/:url" component={StaticPageView} />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/headerMenu/:chosenMenu" component={ProductFilters} />
      <Route exact path="/giftсards" component={GiftCardView} />
      <Route path="/categories/:homepagecategory" component={ProductFilters} />
      <Route path="/products" component={ProductFilters} />
      <Route path="/product-details/:id" component={ProductDetailsLayout} />
      <Route path="/login" component={ProductFilters} />
      <Route path="/404error" component={Error} />
      <Redirect to="/" />
    </Switch>
  );
};
