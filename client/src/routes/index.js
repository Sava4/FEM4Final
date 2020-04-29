import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {StaticPageView} from "../components/StaticPageView/staticPageView";
import {Homepage} from "../components/homePage/HomePage";
import {ProductFilters} from "../components/ProductsFilterList";
import {Categories} from "../components/Categories";
import {ProductDetailsLayout} from "../components/ProductDetails";
import {AccountRoute, PersonalInformationRouter} from "../components/PersonalDetails/MobilePersonalInformation/MobilePersonalInformation";
import {ChangePasswordRouter} from "../components/PersonalDetails/MobileChangePassword/MobileChangePassword";
import {Wishlist} from "../components/Wishlist/wishlist";
import {ShoppingBag} from "../components/ShoppingBag";
import {Error} from "../components/404error";
import ProductsContainer from "../components/SliderProducts/ProductsContainer";
import {Checkout} from "../components/Checkout";

export const Routes = () => {
  const user = useSelector(state => state.user);
  return user ? (
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/categories/:category/:path?" component={ProductFilters}/>
      <Route path="/products" component={ProductFilters}/>
      <Route path="/product-details/:id" component={ProductDetailsLayout}/>
      <Route path="/pagin/:path?" component={ProductsContainer}/>
      <Route exact path="/account" component={AccountRoute}/>
      <Route exact path="/account/personal-information" component={PersonalInformationRouter}/>
      <Route exact path="/account/change-password" component={ChangePasswordRouter}/>
      <Route exact path="/account/favorites" component={Wishlist}/>
      <Route exact path="/account/shopping-bag" component={ShoppingBag}/>
      <Route exact path="/account/checkout" component={Checkout}/>
      <Route exact path="/logout" component={ProductFilters}/>
      <Route exact path="/404error" component={Error}/>
      <Route exact path="/pages/:url" component={StaticPageView}/>
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/categories" component={Categories}/>
      <Route path="/categories/rings" component={ProductFilters}/>
      <Route path="/categories/earrings" component={ProductFilters}/>
      <Route path="/categories/bracelets" component={ProductFilters}/>
      <Route path="/categories/necklaces" component={ProductFilters}/>
      <Route path="/products" component={ProductFilters}/>
      <Route path="/product-details/:id" component={ProductDetailsLayout}/>
      <Route path="/login" component={ProductFilters}/>
      <Route path="/404error" component={Error}/>
      <Redirect to="/"/>
    </Switch>
  );
};
