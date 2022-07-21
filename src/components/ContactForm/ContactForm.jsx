import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  onSubmit = event => {
    event.preventDefault();
    const id = nanoid();

    const contact = { ...this.state, id };

    this.props.addContactData(contact);
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Phone
          <input
            type="phone"
            name="phone"
            value={phone}
            required
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contacts</button>
      </form>
    );
  }
}
