import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './Contacts/Contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }, actions) => {
    const normalizedName = name.toLowerCase();
    if (
      !contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
    } else {
      alert(`${name} is already is contacts`);
    }
    actions.resetForm();
  };

  const handleDelete = name => {
    setContacts(contacts.filter(contact => contact.name !== name));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} handleDelete={handleDelete} />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

// handleSubmit = ({ name, number }, actions) => {
//   const normalizedName = name.toLowerCase();
//   if (
//     !this.state.contacts.find(
//       contact => contact.name.toLowerCase() === normalizedName
//     )
//   ) {
//     this.setState(prevstate => ({
//       contacts: [...prevstate.contacts, { id: nanoid(), name, number }],
//     }));
//   } else {
//     alert(`${name} is already is contacts`);
//   }
//   actions.resetForm();
// };

// handleDelete = name => {
//   this.setState(prevstate => ({
//     contacts: prevstate.contacts.filter(contact => contact.name !== name),
//   }));
// };

//   componentDidMount() {
// const contacts = localStorage.getItem('contacts');
// const parsedContacts = JSON.parse(contacts);
// if (parsedContacts) {
//   this.setState({ contacts: parsedContacts });
// }
//   }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

//   render() {
//     const { contacts } = this.state;

// return (
//   <div>
//     <h1>Phonebook</h1>
//     <Form handleSubmit={this.handleSubmit} />
//     <h2>Contacts</h2>
//     <Contacts contacts={contacts} handleDelete={this.handleDelete} />
//   </div>
// );
//   }
// }
