import { Box, Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './LayoutComponents/Footer'
import Header from './LayoutComponents/Header'
import '../assets/reset.css'
export default function Layout() {
  return (
    // Fluid
    <Box>
      <Header/>
      <Container maxWidth="xl">
        <Outlet/>
      </Container>
      <Footer/>
    </Box>
  )
}
