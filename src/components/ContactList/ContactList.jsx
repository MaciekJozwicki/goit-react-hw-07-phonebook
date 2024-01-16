import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts
        ? contacts.map(contact => (
            <li key={contact.id} className="text-item">
              Name: {contact.name} <br />
              Number: {contact.phone}
              <br />
              <button onClick={() => dispatch(removeContact(contact.id))}>
                Delete
              </button>
            </li>
          ))
        : null}
    </ul>
  );
};

export default ContactList;
