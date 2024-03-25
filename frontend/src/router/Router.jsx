import React from 'react'
import Pages from '../pages/exports'
import {Routes, Route} from 'react-router-dom';

const Router = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Pages.Home/>}/>
      <Route path='/contact-us' element={<Pages.Contactus/>}/>
      </Routes>
    </div>
  )
}

export default Router
