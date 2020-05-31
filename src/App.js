import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colour: 'blue',

    };
  }



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

  constructor() {
    super();
    this.state = {

      myBooks: []
    };
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const books = result.map(item => { return item; })
        this.setState({ myBooks: books });
      });

  }

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
      <Fragment>
        <div className="menuitem">
          <Menuitem items={ this.menulist }></Menuitem>
        </div>

        <Switch>
          <div className="redir">
            <Route path="/contactus" component={ ContactUs } />
            <Route path="/sign" component={ Signup } />
            <Route path="/shop" component={ Shop } />
            <Route path="/cat" component={ Catel } />
            <Route path="/author" component={ () => <Author authorlist={ this.state.myBooks } /> } />


          </div>
        </Switch>

      </Fragment>
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

      <h3>
        Contact Us on +61 435322327
      </h3>

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

export class Shop extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Shop With us!
        </h3>
      </div>
    )
  }
}
export class Catel extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Our Catelogue:
        </h3>
      </div>
    )
  }
}
export class Author extends React.Component {

  render() {

    const listItems = this.props.authorlist.map(item => (item.author))
    const listfin = [ ...new Set(listItems) ];

    return (
      listfin.map(item => <div className="auth">{ item }</div>)
    )
  }
}

export default App;
