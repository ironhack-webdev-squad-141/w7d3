import React from "react";
import Contact from "./Contact";

class ContactsList extends React.Component {
  render() {
    return (
      <table
        style={{
          width: "50%",
          margin: "auto"
        }}
      >
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.props.contacts.map((contact, i) => {
            return (
              <Contact
                handleDelete={() => this.props.handleDelete(i)}
                key={i}
                data={contact}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ContactsList;
