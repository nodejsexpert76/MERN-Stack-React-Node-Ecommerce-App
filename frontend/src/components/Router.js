import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./Home";
import PrivateRoute from "../components/auth/privateRoute";
import AdminRoute from "../components/auth/adminRoute";
import Dashboard from "./user/userDashboard";
import adminDashboard from "./user/adminDashboard";
import AddCategory from "./admin/addCategory";
import AddProduct from "./admin/addProduct";
import Shop from './shop';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
         <Route path="/shop" exact component={Shop} />
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={adminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path ='/create/product' exact component={AddProduct}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
