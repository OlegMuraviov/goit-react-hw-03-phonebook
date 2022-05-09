const ContactItem = ({ contact, onDeleteUser }) => {
  const { id, name, number } = contact;

  return (
    <li>
      {name}: {number}{' '}
      <button type="button" onClick={() => onDeleteUser(id)}>
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
