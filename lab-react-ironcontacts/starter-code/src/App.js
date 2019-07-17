import React, { Component } from "react";
import ContactsList from "./components/ContactsList";
import ContactForm from "./components/ContactForm";
import JSONContacts from "./contacts.json";

import "./App.css";

class App extends Component {
  state = {
    contacts: JSONContacts.slice(0, 5)
  };

  pushRandomContact = () => {
    let contacts = [...this.state.contacts];
    contacts.push(
      JSONContacts[Math.floor(Math.random() * JSONContacts.length)]
    );
    this.setState({
      contacts: contacts
    });
  };

  sortContacts = type => {
    let contacts = [...this.state.contacts];

    if (type === "name") {
      contacts.sort((a, b) => a.name.localeCompare(b.name));
      //   contacts.sort((a, b) => a[type].localeCompare(b[type]));
    } else if (type === "popularity") {
      //   contacts.sort((a, b) => b[type] - a[type]);
      contacts.sort((a, b) => b.popularity - a.popularity);
    }

    this.setState({
      contacts: contacts
    });
  };

  handleDelete = index => {
    let contacts = this.state.contacts.slice();
    contacts.splice(index, 1);

    this.setState({
      contacts
    });
  };

  pushContact = contact => {
    let contacts = [...this.state.contacts];
    contacts.push(contact);

    this.setState({ contacts: contacts });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.pushRandomContact}>Add random contact</button>
        <button onClick={() => this.sortContacts("name")}>Sort by Name</button>
        <button onClick={() => this.sortContacts("popularity")}>
          Sort by Popularity
        </button>

        <ContactForm pushContact={this.pushContact} />

        <ContactsList
          handleDelete={this.handleDelete}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
