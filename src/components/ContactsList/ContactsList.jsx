import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = ({ contacts, onDeleteUser }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDeleteUser={onDeleteUser}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ContactsList;
