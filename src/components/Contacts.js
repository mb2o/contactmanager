import React, { Component, Fragment } from 'react';

import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@example.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        phone: '444-444-4444'
      },
      {
        id: 3,
        name: 'Karen Smith',
        email: 'ksmith@example.com',
        phone: '777-777-7777'
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  render() {
    return (
      <Fragment>
        {this.state.contacts.map(contact => (
          <Contact
            key={contact.id}
            {...contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </Fragment>
    );
  }
}

export default Contacts;
