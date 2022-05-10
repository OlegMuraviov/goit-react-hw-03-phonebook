import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onChangeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onAddUser = contact => {
    const { contacts } = this.state;
    const { name, number } = contact;
    const searchedName = name.toLowerCase();

    if (
      contacts.some(contacts => contacts.name.toLowerCase() === searchedName)
    ) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name,
            number,
          },
        ],
      };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter === '') return contacts;
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  componentDidMount() {
    const constactsFromLoacalStorage = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (!constactsFromLoacalStorage) return;
    this.setState({ contacts: constactsFromLoacalStorage });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  onDeleteUser = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(element => element.id !== id),
      };
    });
  };

  render() {
    return (
      <div>
        <Section>
          <Phonebook
            onChangeInput={this.onChangeInput}
            onAddUser={this.onAddUser}
          />
          <h3>Contacts</h3>
          <Filter
            value={this.state.filter}
            onChangeInput={this.onChangeInput}
          />
          <ContactsList
            contacts={this.getFilteredContacts()}
            onDeleteUser={this.onDeleteUser}
            filter={this.state.filter}
          />
        </Section>
      </div>
    );
  }
}

export default App;
