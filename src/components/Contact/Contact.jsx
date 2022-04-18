import { Button } from 'components/Contact/Contact.styled';

export const Contact = ({ name, number, DeleteContact }) => {
  return (
    <>
      <p>{name}:</p>
      <p>{number}</p>
      <Button type="button" onClick={DeleteContact}>
        Delete
      </Button>
    </>
  );
};
