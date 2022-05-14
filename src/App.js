import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import AddUser from './Pages/AddUser/AddUser';
import Products from './Pages/Products/Products';
import Inventory from './Pages/Inventory/Inventory';
import ProductAdd from './Pages/ProductAdd/ProductAdd';
import { ToastContainer } from 'react-toastify';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyItems from './Pages/MyItems/MyItems';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import Users from './Pages/Users/Users';
import Blogs from './Pages/Blogs/Blogs';
function App() {

  return (
    <div className="App">
      {/* <h1>My Data: {users.length}</h1> */}
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/addUser' element={<AddUser></AddUser>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>

        <Route path='/Products' element={<Products></Products>}></Route>
        <Route path='/product/:id' element={
          <RequireAuth>
            <PlaceOrder />
          </RequireAuth>}>
        </Route>
        <Route path='/product/addProduct' element={
          <RequireAuth>
            <ProductAdd></ProductAdd>
          </RequireAuth>}>
        </Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <UpdateProduct />
          </RequireAuth>}>
        </Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>}>
        </Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route >
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
