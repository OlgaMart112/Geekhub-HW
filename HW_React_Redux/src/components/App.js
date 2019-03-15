import React, { Component, createRef } from 'react';
import Header from './Header';
import Logo from './Logo';
import UserMenu from './UserMenu';
import HeaderMenu from './HeaderMenu';
import DropDown from './DropDown';
import Authentication from './Authentication';
import menu from '../JSON/menu.json';
import orderHistory from '../JSON/order-history.json';
import MenuList from './MenuList';
import OrderHistory from './OrderHistory';
import Modal from './Modal';

export default class App extends Component {
  state = { isModalWindowOpen: false };

  openModalWindow = () => {
    this.setState(state => ({
      isModalWindowOpen: true,
    }));
  };

  closeModalWindow = () => {
    this.setState(state => ({
      isModalWindowOpen: false,
    }));
  };
  handleKeyUp = evt => {
    if (evt.keyCode === 27) this.closeModalWindow();
  };

  handleOutsideClick = evt => {
    const isTargetInsideContainer = this.innerRef.current.contains(evt.target);

    const { isModalWindowOpen } = this.state;
    if (isModalWindowOpen && !isTargetInsideContainer) {
      this.closeModalWindow();
    }
  };
  render() {
    const { isModalWindowOpen } = this.state;

    const links = [
      { label: 'Menu', link: '#menu' },
      { label: 'About', link: '#about' },
      { label: 'Home', link: '#home' },
      { label: 'Contact', link: '#contact' },
      { label: 'Delivery', link: '#delivery' },
    ];

    const userMenuSettings = [
      { label: 'Account', link: '#account' },
      { label: 'Order History', link: '#order' },
      { label: 'Meal Planer', link: '#meal' },
    ];

    return (
      <div>
        <Header />
        <OrderHistory orders={orderHistory} />
        <button type="button" onClick={this.openModalWindow}>
          Open Modal
        </button>
        {isModalWindowOpen && (
          <Modal
            onClose={this.closeModalWindow}
            onRequestClose={this.closeModalWindow}
          />
        )}
      </div>
    );
  }
}
