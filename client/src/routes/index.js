import React from "react";
import {Route, Redirect, Switch} from "react-router-dom" 


import {Homepage} from "../conponents/homePage";
import {Products} from "../conponents/products";
import {Categories} from "../conponents/categories";

export const Routes = () => {
    // const [isAutificated, setIsAutificated]= useState(false)
    const isAutificated = true;
  return  (isAutificated) ? (
      
      <Switch>
          
            <Route path="/home" component = {Homepage}></Route>
            <Route exect path="/categories" component={Categories}></Route>
            <Route exect path="/products" component={Products}></Route>
            <Redirect to="/"></Redirect>      
         
      </Switch>
  ) :(
    <Switch>
                
            <Route path="/home" component = {Homepage}></Route>
            <Route exect path="/categories" component={Categories}></Route>
            <Route exect path="/products" component={Products}></Route>
            <Redirect to="/"></Redirect>      

    </Switch>
    )
    
} 