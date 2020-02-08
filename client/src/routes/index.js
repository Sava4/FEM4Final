import React from "react";
import {Route, Redirect, Switch} from "react-router-dom" 


import {Homepage} from "../conponents/homePage/HomePage";
import {Products} from "../conponents/products";
import {Categories} from "../conponents/categories";
import {ProductDitails} from "../conponents/productDitails";
import {Bin} from "../conponents/bin";
import {Error} from "../conponents/404error"

export const Routes = () => {
    // const [isAutificated, setIsAutificated]= useState(false)
    const isAutificated = true;
  return  (isAutificated) ? (
      
      <Switch>
          
            <Route exact path="/" component = {Homepage}></Route>
            
            <Route  path="/categories" component={Categories}></Route>
                <Route path="/categories/rings" component={Products}></Route>
                <Route path="/categories/earrings" component={Products}></Route>
                <Route path="/categories/bracelets" component={Products}></Route>
                <Route path="/categories/neclaces" component={Products}></Route>
            <Route path="/products" component={Products}> </Route>
            <Route path="/productsditails" component={ProductDitails}> </Route>
            <Route path="/account" component={Products}></Route>
            <Route path="/logout" component={Products}></Route>
            <Route path="/bin" component={Bin}></Route>
            <Route path="/404error" component={Error}></Route>
            <Redirect to="/"></Redirect>      
         
      </Switch>
  ) :(
    <Switch>
                
                <Route exact path="/" component = {Homepage}></Route>
            
            <Route  path="/categories" component={Categories}></Route>
                <Route path="/categories/rings" component={Products}></Route>
                <Route path="/categories/earrings" component={Products}></Route>
                <Route path="/categories/bracelets" component={Products}></Route>
                <Route path="/categories/neclaces" component={Products}></Route>
            <Route path="/products" component={Products}> </Route>
            <Route  path="/productsditails" component={ProductDitails}> </Route>
            <Route path="/login" component={Products}></Route>
            <Route path="/404error" component={Error}></Route>
            <Redirect to="/"></Redirect>      

    </Switch>
    )
    
} 