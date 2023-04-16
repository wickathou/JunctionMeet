import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import NavFilters from './NavFilters'
import { Container } from 'react-bootstrap'

function Layout() {
  return (
    <>
      <Header />
      <NavFilters />
      <Container>
        <Outlet/>
      </Container>
    </>
  )
}

export default Layout