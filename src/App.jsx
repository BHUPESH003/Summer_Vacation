// src/App.jsx
import React from 'react';
import {  Link, Route, createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import Support from './pages/Support';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Error from './components/Error'
import Community from './pages/Community';
import ProductDetails from './components/Products/ProductDetails';
import CommunityDetails from './components/Community/CommunityDetails';
import Faq from './components/Community/Faq'
import ShippingPolicy from './components/Support/ShippingPolicy';
import PrivacyPolicyPage from './components/Support/PrivacyPolicyPage';
import RefundPolicy from './components/Support/RefundPolicy';
import LoginComponent from './pages/Login';
import Register from './pages/Register';
import PostDetails from './components/Posts/PostDetails'
import EditPost from './components/Posts/EditPost'
import CreatePostForm from './components/Posts/CreatePosts';
import { UserContextProvider } from './components/UserContext.jsx';
import DownloadApp from './components/AppComponet';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
  
    <Route
      path="products"
      element={<Products />}
     
    />
      <Route
      path="products/:productId"
      element={<ProductDetails />}
     
    />
    <Route
      path="support"
      element={<Support />}
     
    />
      <Route
      path="profile"
      element={<Profile />}
     
    />
       <Route
      path="post/:id"
      element={<PostDetails />}
     
    />
       <Route
      path="create"
      element={<CreatePostForm />}
     
    />
      <Route
      path="edit/:id"
      element={<EditPost />}
     
    />
      <Route
      path="login"
      element={<LoginComponent />}
     
    />
      <Route
      path="register"
      element={<Register />}
     
    />
       <Route
      path="community"
      element={<Community />}
     
    />
      <Route
      path="community/:id"
      element={<CommunityDetails />}
     
    />
      <Route
      path="faq"
      element={<Faq />}
     
    />
     <Route
      path="order"
      element={<DownloadApp />}
     
    />

<Route
      path="refund-policy"
      element={<RefundPolicy />}
     
    />   <Route
      path="privacy-policy"
      element={<PrivacyPolicyPage/>}
     
    />   <Route
      path="shipping-policy"
      element={<ShippingPolicy />}
     
    />
      <Route path="*" element={<Error />} />
  </Route>
))

function App() {
  return (
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App;
