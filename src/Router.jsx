import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './common/Layout'
import NotFound from './common/NotFound'
import Home from './pages/Home'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
