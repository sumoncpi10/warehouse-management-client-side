import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import ProductAdd from './Pages/ProductAdd/ProductAdd';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div className="App">
      <h1>My Data: {users.length}</h1>
      <Routes>
        <Route path='/' element={<ProductAdd></ProductAdd>}></Route>
        <Route path='/addProduct' element={<ProductAdd></ProductAdd>}></Route>
        {/* <Route path='/orders' element={<Order />}></Route>

        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>}>
        </Route>

        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route> */}
        <Route path='/*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
