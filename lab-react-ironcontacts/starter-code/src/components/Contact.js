import React, { Component } from "react";

export class Contact extends Component {
  render() {
    const { data } = this.props;
    return (
      <tr>
        <td>
          <img width="50px" src={data.pictureUrl} alt={data.name} />
        </td>
        <td>{data.name}</td>
        <td>{data.popularity.toFixed(2)}</td>
        <td>
          <button onClick={this.props.handleDelete}>delete</button>
        </td>
      </tr>
    );
  }
}

export default Contact;
