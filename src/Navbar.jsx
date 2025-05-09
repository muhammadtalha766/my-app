import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Navbar() {
  return (
 <>
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/nopage">Nopage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
 </>
  )
}

export default Navbar