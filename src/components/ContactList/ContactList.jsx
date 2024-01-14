import { useDispatch } from 'react-redux';
import { contacts, filter } from '../../redux/selectors';
import { removeFromArray } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts
        ? filteredContacts.map(contact => (
            <li key={contact.id}>
              Name: {contact.name} Number: {contact.number}
              <button onClick={() => dispatch(removeFromArray(contact.id))}>
                Delete
              </button>
            </li>
          ))
        : null}
    </ul>
  );
};

export default ContactList;
