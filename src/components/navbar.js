import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <header className="bg-primary-100">
      <nav className="container flex flex-row items-baseline justify-between py-6">
        <Link to="/" className="text-xl font-medium">
          Gera Patirtis
        </Link>
        <div className="flex flex-row items-baseline justify-end">
          <Link className="font-medium" to="/apie">
            Apie
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
