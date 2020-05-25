import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 >
          Welcome to my Page on { this.props.name }
        </h1>
        <h2><Menubar /></h2>

      </div >
    );
  }
}

export class Menubar extends React.Component {
  menulist = [ {
    id: 1,
    label: "Catalogue",
  },
  {
    id: 2,
    label: "Author List"
  },
  {
    id: 3,
    label: "Contact Us"
  } ];
  render() {
    return (
      <Menuitem items={ this.menulist }></Menuitem>
    )
  }
}
export class Menuitem extends React.Component {
  render() {
    return this.props.items.map(item => <li>{ item.label }</li>)
  }

}

export default App;
