import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="heading">
        <h1 >
          Welcome to my Page on { this.props.name }
        </h1>
        <Router>
          <h2><Menubar /></h2>
        </Router>

      </div >
    );
  }
}

export class Menubar extends React.Component {
  menulist = [ {
    id: 1,
    label: "Catalogue",
    link: "cat"
  },
  {
    id: 2,
    label: "Author List",
    link: "author"
  },
  {
    id: 3,
    label: "Contact Us",
    link: "contactus"
  },
  {
    id: 4,
    label: "Shop Books",
    link: "shop"
  },
  {
    id: 5,
    label: "Sign Up",
    link: "sign"
  }

  ];
  render() {
    return (
      <div className="menuitem">
        <Menuitem items={ this.menulist }></Menuitem>
        <Switch>
          <Route path="/contactus" component={ ContactUs } />
          <Route path="/sign" component={ Signup } />
        </Switch>
      </div >
    )
  }
}
export class Menuitem extends React.Component {
  render() {

    return this.props.items.map(item => <Link to={ "/" + item.link }><li>{ item.label }</li></Link>)
  }

}
export class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Contact Us on +61 435322327
        </h3>
      </div>
    )
  }
}


export class Signup extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Sign Up
        </h3>
      </div>
    )
  }
}

export default App;
