import React from 'react'

const Header = ({title}) => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">{title}</h1>
    </div>
  )
}

export default Header