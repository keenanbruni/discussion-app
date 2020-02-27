import React from 'react'
import logo from '../logo.png'

const Header = (props) => (
    <div className="header">
        <div className="header__container">
            <h1 className="header__title">{props.title}</h1>
            <img className="header__image" src={logo} alt="Company Logo"></img>
        </div>
    </div>
)

Header.defaultProps = {
    title: 'Discussion Board'
  };

  export default Header;