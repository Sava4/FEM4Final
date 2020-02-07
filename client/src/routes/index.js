import React from "react";
import {Route, Redirect, Switch} from "react-router-dom" 


import {Homepage} from "../conponents/homePage/HomePage";
import {Products} from "../conponents/products";
import {Categories} from "../conponents/categories";

export const Routes = () => {
    // const [isAutificated, setIsAutificated]= useState(false)
    const isAutificated = true;
  return  (isAutificated) ? (
      
      <Switch>
          
            <Route path="/home" component = {Homepage}></Route>
            <Route exect path="/categories" component={Categories}>
                {/* <Route exect path="/categories/rings" component={Products}></Route>
                <Route exect path="/categories/earrings" component={Products}></Route>
                <Route exect path="/categories/bracelets" component={Products}></Route>
                <Route exect path="/categories/neclaces" component={Products}></Route> */}
            </Route>
            <Route exect path="/colections" component={Products}>
                <Route exect path="/products" component={Products}></Route>
            </Route>
            <Route exect path="/account" component={Products}></Route>
            <Route exect path="/logout" component={Products}></Route>
            {/* <Route exect path="/bin" component={Products}></Route> */}
            <Redirect to="/"></Redirect>      
         
      </Switch>
  ) :(
    <Switch>
                
            <Route path="/home" component = {Homepage}></Route>
            <Route exect path="/categories" component={Categories}></Route>
            <Route exect path="/collections" component={Categories}></Route>
            <Route exect path="/products" component={Products}></Route>
            <Route exect path="/login" component={Products}></Route>
            <Redirect to="/"></Redirect>      

    </Switch>
    )
    
} 