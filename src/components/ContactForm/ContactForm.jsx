import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

const ContactForm = ({ newContact }) => {
  const dispatch = useDispatch();
  const [userData, setuserData] = useState({
    name: '',
    number: '',
  });

  const handleInput = e => {
    setuserData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    dispatch(
      addContact({
        id: nanoid(),
        name: userData.name,
        phone: userData.number,
      })
    );
    e.preventDefault();

    setuserData({
      name: '',
      number: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="formEl__form">
        <label className="text-item">Name</label>
        <input
          onChange={handleInput}
          value={userData.name}
          className="input-item"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className="text-item">Number</label>
        <input
          onChange={handleInput}
          value={userData.number}
          className="input-item"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className="text-item">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;
