import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { List, Item } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        {/* <p>
          {name}: <p>{number}</p>
        </p>
        <Button onClick={() => onDeleteContact(id)}>Delete</Button> */}
        <Contact
          name={name}
          number={number}
          DeleteContact={() => onDeleteContact(id)}
        />
      </Item>
    ))}
  </List>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
