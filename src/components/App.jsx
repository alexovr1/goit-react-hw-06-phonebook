import { Form } from './Form/Form';
import { ContactList } from './Contacts/Contacts';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};
