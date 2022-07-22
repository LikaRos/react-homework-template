import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContactData = ({ name, phone, id }) => {
    const contact = { name, phone, id };
    const oldContact = this.state.contacts.find(
      contact => contact.name === name
    );
    if (oldContact) {
      return alert(`${name} is already in contact`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  handlerFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };
  getVisableContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm addContactData={this.addContactData} />

        <h2>Contacts</h2>

        <ContactFilter filter={filter} handlerFilter={this.handlerFilter} />

        <ContactsList contactsList={this.getVisableContacts()} />
      </div>
    );
  }
}
