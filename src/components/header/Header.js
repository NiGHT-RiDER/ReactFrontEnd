import React , {Component} from 'react';
import logo from '../../resources/logo.svg';
import './Header.css';

class Header extends Component {
    render(){
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
        );   
    }
}
export default Header;