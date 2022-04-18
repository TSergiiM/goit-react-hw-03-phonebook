import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactsList.styled';
export const ContactsList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <p>
          {name}: <p>{number}</p>
        </p>
        <Button onClick={() => onDeleteContact(id)}>Delete</Button>
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
