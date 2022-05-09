import { Component } from 'react';

// ({ onChangeInput, onAddUser }) => {

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form
          action=""
          onSubmit={e => {
            e.preventDefault();
            this.props.onAddUser(this.state);
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            onChange={this.onChangeInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number">Number</label>
          <input
            onChange={this.onChangeInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default Phonebook;
