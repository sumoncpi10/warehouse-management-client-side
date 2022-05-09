import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import AddUser from './Pages/AddUser/AddUser';
import Products from './Pages/Products/Products';
import ProductAdd from './Pages/ProductAdd/ProductAdd';
import { ToastContainer } from 'react-toastify';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/users')
  //     .then(res => res.json())
  //     .then(data => setUsers(data))
  // }, [])
  return (
    <div className="App">
      {/* <h1>My Data: {users.length}</h1> */}
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/addUser' element={<AddUser></AddUser>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/product/addProduct' element={
          <RequireAuth>
            <ProductAdd></ProductAdd>
          </RequireAuth>}>
        </Route>
        {/* <Route path='/orders' element={<Order />}></Route>

        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>}>
        </Route>

        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route> */}
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
