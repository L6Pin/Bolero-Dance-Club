import React, { Component } from 'react';


class Menu extends Component {
    state = { isActive: false };

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
      };
      
 
    render() { 
        return ( 
            <div className="menuContainer">
            <div className={this.state.isActive ? "menu menuOpen" : "menu "}>
            <div onClick={this.handleToggle}><i className="fas fa-chevron-up menu__arrow" ></i></div>
            <div className="menu__link m_padding">
                <a href="#"  >Plesovi</a>
                <a href="#">Instruktori</a>
                <a href="#">Kontakt</a>
            </div>
        </div>
       </div>
         );
    }
}
 
export default Menu;









