import React, { Component } from 'react';
import logo from '../../logo.svg';
import Navigation from '../navigation/navigation';

class Header extends Component {
  render() {
    return (
        <header>
            <Navigation />
        </header>
    );
  }
}

export default Header;