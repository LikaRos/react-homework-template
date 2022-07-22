import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactsList = ({ contactsList }) => {
  return (
    <ul>
      {contactsList.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
          </li>
        );
      })}
    </ul>
  );
};
ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
// commit
