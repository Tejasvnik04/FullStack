
import { Navigate, Route, Routes } from "react-router-dom";
import LazyLoader from "./LazyLoader.jsx";
import './assets/css/App.css'

import { Component, lazy } from "react";
import Userdash from "./pages/users/Userdash.jsx";

const LazySignin=lazy(()=> import("./components/Signin.jsx"))
const LazyLanding=lazy(()=> import("./components/Landing.jsx"))
const Lazyusermain= lazy(()=> import("./pages/users/Main.jsx"))
const LazyAdminMain=lazy(()=>import("./pages/admin/Admindash.jsx"))
const LazySignup=lazy(()=>import("./components/Signup.jsx"))
const LazySearch=lazy(()=>import("./pages/Search.jsx"))
const LazyBoatsSearch=lazy(()=>import("./pages/InfoSection/BoatCarousel.jsx"))
const LazyAbout=lazy(()=>import("./pages/users/About.jsx"))
const LazyBookForm=lazy(()=>import("./pages/users/BookingForm.jsx"))
const LazyyourBooking=lazy(()=>import("./pages/users/Bookings.jsx"))

const UserRoutes = ()=>
{
  return 
  (
    <Lazyusermain>
    <Routes>
      <Route path='/home' element={<Userdash/>}/>
    </Routes>
    </Lazyusermain>
  )
}
const AdminRoutes = ()=>
{
  return 
  (
    <LazyAdminMain>
    <Routes>
      <Route path='/home' element={<Admindash/>}/>
    </Routes>
    </LazyAdminMain>
  )
}

function App() {

  return (
    <Routes>
      <Route path='/' element={<LazyLoader component={LazyLanding}/>}/>
      <Route path='/signin' element={<LazyLoader component={LazySignin}/>}/>
      <Route path='/user/*' element={<LazyLoader component={UserRoutes}/>}/>
      <Route path='/signup' element={<LazyLoader component={LazySignup}/>}/>
      <Route path='/home' element={<LazyLoader component={LazySearch}/>}/>
      <Route path='/admin/*' element={<LazyLoader component={LazyAdminMain}/>}/>
      <Route path='/boats' element={<LazyLoader component={LazyBoatsSearch}/>}/>
      <Route path='/about' element={<LazyLoader component={LazyAbout}/>}/>
      <Route path='/bookingForm' element={<LazyLoader component={LazyBookForm}/>}/>
      <Route path='/yourbookings' element={<LazyLoader component={LazyyourBooking}/>}/>
     
      
    </Routes>
       
  )
}

export default App
