import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Banner';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';

import MontyShet from './Pages/Dashborad/MontyShet';
import { ToastContainer } from 'react-toastify';

import { useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Navbar2 from './Pages/Shared/Navbar2';
import Attendence from './Attendence/Attendence';
import OrderPractise from './Orders/OrderPractise';
import Navbar from './Pages/Shared/Navbar';


function App() {
 
const [user] = useAuthState(auth)



  return (
    <div className="App ">
      <Navbar2/>

     <Routes>
     <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/' element={<Home></Home>}></Route>
    
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/attend1' element={<Attendence/>}/>
    <Route path='/order' element={<OrderPractise/>}/>
   
     
   
    
      <Route path='/addsells' element={<MontyShet/>}></Route>


   


          

  {/* </Route> */}


     </Routes>
     <ToastContainer />

    </div>
  );
  }
    // Custom PrivateRoute component to handle authentication

export default App;


{/* <Redirect to="/Cheker.css" /> */}
{/* <Route path="/deshBoardLock" element={<DeshBoardLock />} /> */}

// }