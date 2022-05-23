import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import ProductCart from "../Components/Cart/Cart";
import SingleProductInfo from "../Components/Cart/SingleProuductPage";
import AllProducts from "../Components/Cart/ViewProducts";
import EmailVerify from "../Components/EmailVerify";
import Hiring from "../Components/Hiring/Hiring";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login";

import Addproduct from "../Components/Products/AddProduct";
import AdminUpdate from "../Components/Products/AdminUpdateproduct";

 
import UpdateProduct from "../Components/Products/UpdateProduct";
import Product from "../Components/Products/ViewProduct";
import EditProfile from "../Components/Profile/EditProfile";
import UserProfile from "../Components/Profile/UserProfile";
import SignUp from "../Components/SignUp";
import { parseJwt } from "../utils/parseJwt";
export const Container = () => {
  //in login branch
  const user = localStorage.getItem("token");
  const decodeUser = parseJwt(user)
  // console.log(decodeUser.user)
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />


        {/* Admin route for product */}
        <Route path="/addProduct" element={<Addproduct />}></Route>
        <Route path='/getproduct' element={<Product/>}></Route>
        <Route path='/adminUpdateproduct' element={<AdminUpdate/>}></Route>
        <Route path='/update-product/:pid' element={<UpdateProduct/>}></Route>
        
        
        {/* {user && (
          
        )} */}

        {/* {
          decodeUser.user?.role === "admin"?
          <Route path="/edit-profile" element={<EditProfile />}></Route>
          :
          <></>
        } */}


        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        {/* <Route path="/" exact element={<Navigate replace to="/login" />} /> */}
        <Route
          path="/customer/register/:id/verify/:token"
          element={<EmailVerify />}
        />
<<<<<<< HEAD
        <Route path='/update-product' element={<Update/>}></Route>
        <Route path="/edit-profile" element={<EditProfile />}></Route>
        <Route path="/profile-creation" element={<UserProfile />}></Route>
=======

       

        <Route path='/job-form-submit' element={<Hiring/>}></Route>
        <Route path='/cart' element={<ProductCart/>}></Route>

        <Route path='/display-all-products' element={<AllProducts/>}></Route>
        <Route path='/single-product/:pid' element={<SingleProductInfo/>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>




        <Route path='/getproduct' element={<Product/>}></Route>
        <Route path='/update-product/:pid' element={<UpdateProduct/>}></Route>

        <Route path="/edit-profile" element={<EditProfile />}></Route>
>>>>>>> 23713a55bead9b285c2d8b40d9979f2095c3fdc9
      </Routes>
    </>
  );
};
