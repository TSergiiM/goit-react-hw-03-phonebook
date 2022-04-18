import PropTypes from 'prop-types';
import { Input } from './ContactsFilter.styled';
export const ContactsFilter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <Input type="text" value={value} onChange={onChange}></Input>
    </label>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
