import React from "react";
import './styles.css';

class NavBar extends React.Component {
 
  render() {
    return (
      <header className="main-header">
        <img src="https://images.ctfassets.net/5gv1edeicqfs/bomBQDobMA6eyu4CkuYmM/6f5debe74cf1e335bb0be7e3ecbba40b/gs-logo.png" alt="GuideSmiths Logo"></img>
          <span>
          interview-code-challenges phone-catalogue
          </span>
      </header>
 ) }
}

export default NavBar;
