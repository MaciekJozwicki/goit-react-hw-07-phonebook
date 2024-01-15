import { useDispatch, useSelector } from 'react-redux';
import { contacts, filter } from '../../redux/selectors';
import { removeFromArray } from '../../redux/contactsSlice';
import { fetchContacts } from '../../redux/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();

  const contactsResult = useSelector(contacts);
  const filterResult = useSelector(filter);

  console.log(contactsResult);

  // refetchowanie po dodaniu
  // sprawdzić czy post tez powinien byc w extrareducers
  // dwa razy requesty sie wysylaja to tez trzeba sprawdzic

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contactsResult.filter(contact =>
    contact.name.toLowerCase().includes(filterResult.toLowerCase())
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
